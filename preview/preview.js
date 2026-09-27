/* PREVIEW ONLY - not part of the site. Accent colour switcher for comparing colours.
   Hover a dot to try a colour, click to keep it (remembered while browsing the preview). */
(function () {
  var KEY = 'preview-accent', html = document.documentElement;
  var options = [
    ['', 'Turkuaz', '#5cc8bd'],
    ['gold', 'Altın', '#d6b46c'],
    ['blue', 'Mavi', '#8ab6ee'],
    ['coral', 'Mercan', '#f29b82'],
    ['sage', 'Adaçayı', '#9dc8a5'],
    ['lavender', 'Lavanta', '#b3a9f3'],
    ['rose', 'Gül kurusu', '#e5a3b6'],
    ['champagne', 'Şampanya', '#e3cfa6']
  ];
  function find(v) { for (var i = 0; i < options.length; i++) if (options[i][0] === v) return options[i]; return null; }
  function get() { try { return localStorage.getItem(KEY) || ''; } catch (e) { return ''; } }
  function save(v) { try { if (v) localStorage.setItem(KEY, v); else localStorage.removeItem(KEY); } catch (e) {} }
  function apply(v) { if (v) html.setAttribute('data-accent', v); else html.removeAttribute('data-accent'); }
  var current = find(get()) ? get() : '';
  apply(current);

  function build() {
    var style = document.createElement('style');
    style.textContent =
      'body{padding-bottom:84px}' +
      '.pv-bar{position:fixed;right:16px;bottom:16px;z-index:60;display:flex;align-items:center;gap:14px;padding:9px 12px 9px 16px;' +
      'border-radius:12px;background:#111b31;border:1px solid rgba(148,163,184,.3);box-shadow:0 14px 34px -12px rgba(0,0,0,.7);' +
      'font:600 13px/1.2 "Source Sans",system-ui,sans-serif;color:#8f9db0}' +
      '.pv-label{white-space:nowrap;min-width:12.5em}' +
      '.pv-label b{color:#f8fafc;font-weight:600}' +
      '.pv-dots{display:flex;gap:8px}' +
      '.pv-dot{width:26px;height:26px;flex:none;border-radius:50%;border:0;padding:0;cursor:pointer;background:var(--sw);' +
      'box-shadow:inset 0 0 0 1px rgba(15,23,42,.25);transition:transform .12s}' +
      '.pv-dot:hover{transform:scale(1.12)}' +
      '.pv-dot[aria-pressed="true"]{box-shadow:0 0 0 2px #111b31,0 0 0 4px #f8fafc}' +
      '.pv-dot:focus-visible{outline:2px solid #f8fafc;outline-offset:4px}' +
      '@media (max-width:600px){body{padding-bottom:112px}' +
      '.pv-bar{left:10px;right:10px;bottom:10px;flex-direction:column;align-items:stretch;gap:10px;padding:10px 14px 12px}' +
      '.pv-label{min-width:0;text-align:center}.pv-dots{justify-content:space-between}.pv-dot{width:30px;height:30px}}' +
      '@media print{.pv-bar{display:none}}';
    document.head.appendChild(style);

    var bar = document.createElement('div');
    bar.className = 'pv-bar';
    bar.setAttribute('role', 'group');
    bar.setAttribute('aria-label', 'Vurgu rengi (yalnızca önizleme)');
    var label = document.createElement('span');
    label.className = 'pv-label';
    label.setAttribute('aria-live', 'polite');
    var dots = document.createElement('div');
    dots.className = 'pv-dots';
    function show(v) { label.innerHTML = 'Vurgu rengi: <b>' + find(v)[1] + '</b>'; }
    show(current);
    options.forEach(function (o) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'pv-dot';
      b.title = o[1];
      b.setAttribute('aria-label', o[1]);
      b.setAttribute('aria-pressed', String(current === o[0]));
      b.style.setProperty('--sw', o[2]);
      b.addEventListener('mouseenter', function () { apply(o[0]); show(o[0]); });
      b.addEventListener('focus', function () { show(o[0]); });
      b.addEventListener('blur', function () { show(current); });
      b.addEventListener('click', function () {
        current = o[0]; save(current); apply(current); show(current);
        var all = dots.querySelectorAll('button');
        for (var i = 0; i < all.length; i++) all[i].setAttribute('aria-pressed', String(all[i] === b));
      });
      dots.appendChild(b);
    });
    dots.addEventListener('mouseleave', function () { apply(current); show(current); });
    bar.appendChild(label);
    bar.appendChild(dots);
    document.body.appendChild(bar);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
