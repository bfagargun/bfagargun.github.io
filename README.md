# besimagargun.com

Personal academic website of Besim Fazıl Ağargün, MD — built with [Hugo](https://gohugo.io) and the
[Hugo Blox](https://hugoblox.com) *Academic CV* template, deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

## Where things live

| What | File(s) |
|---|---|
| Profile: name, role, bio, links, education, experience, awards | `data/authors/me.yaml` |
| Home page sections (bio, selected publications, talks, awards, contact) | `content/_index.md` |
| CV page | `content/experience.md` |
| Publications (one folder per paper, generated from BibTeX) | `content/publications/` |
| Talks & presentations | `content/events/` |
| Site settings, SEO description, analytics IDs, verification codes | `config/_default/params.yaml` |
| Menu | `config/_default/menus.yaml` |
| Portrait / favicon / social sharing card | `assets/media/authors/me.jpg`, `assets/media/icon.png`, `assets/media/sharing.png` |
| CV PDF | `static/uploads/Agargun-CV-YYYY-MM.pdf` (update the button URL in `content/_index.md` and `content/experience.md`) |
| Person schema.org metadata | `layouts/_partials/hooks/head-end/person-schema.html` |

## Adding a publication

1. Append a `@article{...}` entry to `publications.bib` (PubMed → *Cite* → BibTeX works; keep `doi`, `pmid` and a `keywords` line for tags).
2. Commit and push. The **Import Publications From Bibtex** action opens a pull request that adds
   `content/publications/<key>/index.md` — merge it.
3. Optional polish in that `index.md`: replace your own name in `authors:` with `me`, set `featured: true`
   to show it on the home page (max 5), and add a PubMed link under `links:`.

## Local preview

```bash
pnpm install
hugo server -D --buildFuture
```

Hugo version is pinned in `hugoblox.yaml` (`hugo_version`).
