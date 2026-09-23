#!/usr/bin/env python3
"""
Add publications to data/publications.json straight from PubMed.
Python 3 standard library only.

    python3 tools/add_pubmed.py 41669978                 # one PMID
    python3 tools/add_pubmed.py 41669978 40967830        # several
    python3 tools/add_pubmed.py 41669978 --featured      # also show it under "Selected Publications"

Then run   python3 tools/build.py   to create the pages.
Check the new entry in data/publications.json afterwards (journal name, tags) and edit if needed.
"""
import json
import pathlib
import re
import sys
import unicodedata
import urllib.request
import xml.etree.ElementTree as ET

ROOT = pathlib.Path(__file__).resolve().parent.parent
EFETCH = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&retmode=xml&id="
MONTHS = {m: i for i, m in enumerate(["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"], 1)}
SMALL = {"a", "an", "and", "as", "at", "by", "for", "in", "of", "on", "or", "the", "to", "&"}
OWNER_ALIASES = {"agargun besim fazil", "agargun besim f", "agargun besim", "agargun b f", "agargun bf"}


def text(el):
    return " ".join("".join(el.itertext()).split()) if el is not None else ""


def ascii_fold(s):
    s = s.replace("ı", "i").replace("İ", "I")
    return "".join(c for c in unicodedata.normalize("NFKD", s) if not unicodedata.combining(c))


def journal_name(title):
    title = re.split(r"\s+:\s+", title)[0]
    title = re.sub(r"\s*\(.*?\)\s*$", "", title).strip().rstrip(".")
    words = title.split()
    out = []
    for i, w in enumerate(words):
        lw = w.lower()
        out.append(lw if (i and lw in SMALL) else (w if w.isupper() and len(w) > 1 else w[:1].upper() + w[1:]))
    return " ".join(out)


def pages(pg):
    first, _, last = pg.partition("-")
    if last and len(last) < len(first) and last.isdigit() and first.isdigit():
        last = first[: len(first) - len(last)] + last
    return f"{first}-{last}" if last else first


def parse(article_xml):
    art = article_xml.find(".//Article")
    pmid = text(article_xml.find(".//MedlineCitation/PMID"))
    title = text(art.find("ArticleTitle")).rstrip(".")
    authors = []
    for a in art.findall("AuthorList/Author"):
        if a.find("CollectiveName") is not None:
            authors.append(text(a.find("CollectiveName")))
            continue
        fore, last = text(a.find("ForeName")), text(a.find("LastName"))
        name = f"{fore} {last}".strip()
        key = " ".join(re.sub(r"[^a-z]", " ", ascii_fold(f"{last} {fore}").lower()).split())
        authors.append("Besim Fazil Agargun" if key in OWNER_ALIASES else name)
    j = art.find("Journal")
    journal = journal_name(text(j.find("Title")))
    issue_el = j.find("JournalIssue")
    volume, issue = text(issue_el.find("Volume")), text(issue_el.find("Issue"))
    pd = issue_el.find("PubDate")
    year, month = text(pd.find("Year")), text(pd.find("Month"))
    if not year:
        ym = re.search(r"(\d{4})\s*([A-Za-z]{3})?", text(pd.find("MedlineDate")))
        if ym:
            year, month = ym.group(1), ym.group(2) or ""
    ad = art.find("ArticleDate")
    if not year and ad is not None:
        year, month = text(ad.find("Year")), text(ad.find("Month"))
    if month.isdigit():
        m = int(month)
    else:
        m = MONTHS.get(month[:3].lower(), 1) if month else 1
    date = f"{year}-{m:02d}-01"
    pg = pages(text(art.find("Pagination/MedlinePgn")))
    doi = ""
    for e in art.findall("ELocationID"):
        if e.get("EIdType") == "doi":
            doi = text(e)
    if not doi:
        for e in article_xml.findall(".//ArticleIdList/ArticleId"):
            if e.get("IdType") == "doi":
                doi = text(e)
    paras = [text(t) for t in art.findall("Abstract/AbstractText") if text(t)]
    abstract = "\n\n".join(paras)
    ptypes = {text(p) for p in art.findall("PublicationTypeList/PublicationType")}
    if ptypes & {"Letter", "Comment"}:
        ptype, tags = "Letter to the editor", ["Letter to the Editor"]
    elif "Case Reports" in ptypes:
        ptype, tags = "Case report", ["Case Report"]
    else:
        ptype, tags = "Journal article", []
    first_last = ascii_fold(authors[0].split()[-1] if authors else "article").lower()
    first_last = "agargun" if authors and authors[0] == "Besim Fazil Agargun" else re.sub(r"[^a-z]", "", first_last)
    words = [w for w in re.findall(r"[a-z0-9]+", ascii_fold(title).lower()) if len(w) > 3][:2]
    slug = "-".join([first_last or "article", year] + words)
    return {"slug": slug, "title": title, "authors": authors, "journal": journal, "date": date,
            "volume": volume, "issue": issue, "pages": pg, "doi": doi, "pmid": pmid, "type": ptype,
            "featured": False, "tags": tags, "abstract": abstract}


def bibtex(p):
    fields = [("author", " and ".join(p["authors"])), ("title", p["title"]), ("journal", p["journal"]),
              ("year", p["date"][:4]), ("volume", p["volume"]), ("number", p["issue"]),
              ("pages", p["pages"].replace("-", "--")), ("doi", p["doi"]), ("pmid", p["pmid"]),
              ("abstract", p["abstract"])]
    body = ",\n".join(f" {k} = {{{v}}}" for k, v in fields if v)
    return f"@article{{{p['slug'].replace('-', '')},\n{body}\n}}\n"


def main(argv):
    featured = "--featured" in argv
    pmids = [a for a in argv if a.isdigit()]
    if not pmids:
        sys.exit(__doc__)
    data_file = ROOT / "data" / "publications.json"
    pubs = json.loads(data_file.read_text(encoding="utf-8"))
    known = {p.get("pmid") for p in pubs}
    slugs = {p["slug"] for p in pubs}
    todo = [x for x in pmids if x not in known]
    for x in pmids:
        if x in known:
            print(f"PMID {x} is already in data/publications.json, skipped.")
    if not todo:
        return
    with urllib.request.urlopen(EFETCH + ",".join(todo), timeout=30) as r:
        root = ET.fromstring(r.read())
    added = []
    for art in root.findall("PubmedArticle"):
        p = parse(art)
        base, n = p["slug"], 2
        while p["slug"] in slugs:
            p["slug"] = f"{base}-{n}"
            n += 1
        p["featured"] = featured
        slugs.add(p["slug"])
        pubs.append(p)
        (ROOT / "data" / "bib" / f"{p['slug']}.bib").write_text(bibtex(p), encoding="utf-8")
        added.append(p)
        print(f"Added {p['slug']}: {p['title'][:70]} ({p['journal']}, {p['date'][:7]})")
    pubs.sort(key=lambda q: (q["date"], q["title"]), reverse=True)
    data_file.write_text(json.dumps(pubs, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    if added:
        print("Now run:  python3 tools/build.py")


if __name__ == "__main__":
    main(sys.argv[1:])
