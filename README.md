# besimagargun.com

Kişisel akademik site. Düz HTML ve CSS ile yazılmıştır; tema, paket veya derleme adımı yoktur. `main` dalına gönderilen dosyalar birkaç dakika içinde yayına girer.

## Dosyalar

| Dosya / klasör | İçerik |
|---|---|
| `index.html` | Ana sayfa: profil, projeler, deneyim, üyelikler, seçilmiş yayınlar, konuşmalar, ödüller, iletişim |
| `experience/index.html` | CV sayfası |
| `publications/` | Yayın listesi ve her yayının kendi sayfası (betik üretir, elle düzenlemeyin) |
| `events/` | Konuşma listesi ve sayfaları (betik üretir, elle düzenlemeyin) |
| `404.html` | Bulunamayan sayfa |
| `assets/css/site.css` | Tüm görünüm; renkler dosyanın başında (`--accent` vurgu rengidir) |
| `assets/js/site.js` | Yalnızca yayınlardaki "Cite" penceresi |
| `assets/icons.svg` | Sitedeki ikonlar ve logo (`#gi`) |
| `assets/fonts/` | Yazı tipleri: Source Serif 4 (başlıklar) ve Source Sans 3 (metin), SIL Open Font License |
| `assets/img/` | Fotoğraf, paylaşım görseli (`og.png`), sekme simgeleri, logo (`logo.svg`) |
| `uploads/` | CV PDF dosyası |
| `data/publications.json` | Yayın bilgileri |
| `data/talks.json` | Konuşma bilgileri |
| `data/bib/` | Her yayının BibTeX kaydı ("Cite" düğmesi bunu gösterir) |
| `tools/build.py` | Yayın ve konuşma sayfalarını, site haritasını üretir |
| `tools/add_pubmed.py` | PMID ile PubMed'den yayın ekler |
| `google1f7828e7d6067577.html` | Google Search Console doğrulaması. Silmeyin. |
| `CNAME` | Alan adı (besimagargun.com) |

`data/`, `tools/` ve bu README yayınlanmaz, yalnızca depoda durur.

## Metin değiştirmek

`index.html` dosyasını açıp metni doğrudan değiştirin ve kaydedin. Bölümler dosyada `<!-- ============ BÖLÜM ADI ============ -->` başlıklarıyla ayrılmıştır.

`<!-- BEGIN:... -->` ve `<!-- END:... -->` işaretleri arasındaki bloklar betikle güncellenir:

- `selected-publications` ve `recent-talks`: `data/` dosyalarından doldurulur. Buraya elle yazmayın.
- `experience`, `education`, `service`, `awards`: ana sayfada elle düzenlenir, CV sayfasına betik kopyalar. Değişiklikten sonra `python3 tools/build.py` çalıştırın.

## Yayın eklemek

1. `python3 tools/add_pubmed.py 41669978` (PMID yazın; birden çok PMID boşlukla ayrılabilir). Ana sayfadaki "Selected Publications" altında da görünmesi için sonuna `--featured` ekleyin.
2. `data/publications.json` içinde yeni kaydı kontrol edin (dergi adı, `tags`).
3. `python3 tools/build.py`

Elle eklemek için `data/publications.json` içine aynı biçimde bir kayıt ekleyip `python3 tools/build.py` çalıştırmak yeterlidir. `"featured": true` olan yayınlar ana sayfada çıkar. Adınız yazar listesinde hangi yazımla olursa olsun (Agargun BF, Ağargün BF...) kalın gösterilir.

## Konuşma eklemek

`data/talks.json` içine bir kayıt ekleyin: `slug` (adres, ör. `ueg-week-2027-berlin`), `title`, `date`, `end`, `event`, `event_url`, `location`, `summary`, `abstract`, `tags`. Sonra `python3 tools/build.py`. Ana sayfada en yeni 3 konuşma görünür. `abstract` alanında `**kalın**`, `*italik*` ve `- ` ile başlayan madde işaretleri kullanılabilir.

## Proje eklemek veya değiştirmek

`index.html` içinde "RESEARCH PROJECTS" bölümündeki bir `<li>` satırını kopyalayıp başlığı değiştirin. Numaralar (01, 02...) kendiliğinden verilir. Durum etiketi sınıfları: `status-active` (Active), `status-planning` (Planning), `status-published` (Published). Projeler bilerek yalnızca başlıkla gösterilir; yöntem veya ayrıntı yazılmaz.

## Yazım kuralları

- Uzun (—) ve kısa (–) tire kullanılmaz; aralıklarda `-` kullanılır.
- Ad sitede "Besim Fazil Agargun" olarak (Türkçe karaktersiz) yazılır. Türkçe yazım "Besim Fazıl Ağargün" yalnızca arama motorlarının okuduğu açıklama ve profil verisinde durur; böylece iki yazımla da aranınca site bulunur.

## Yayınlama

`main` dalına gönderilen her değişiklik `.github/workflows/deploy.yml` ile GitHub Pages'e yüklenir. Derleme olmadığı için yayın bir iki dakika sürer.

## Eski sürüm

Bu sürümden önceki HugoBlox sitesi depoda `hugoblox-son` etiketiyle saklanır. Geri dönmek gerekirse o etiketteki dosyalar geri yüklenebilir.
