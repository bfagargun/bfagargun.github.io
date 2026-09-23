/* PREVIEW ONLY - not part of the site. Accent colour switcher for comparing colours. */
(function () {
  var KEY = 'preview-accent', html = document.documentElement;
  function get() { try { return localStorage.getItem(KEY) || ''; } catch (e) { return ''; } }
  function save(v) { try { if (v) localStorage.setItem(KEY, v); else localStorage.removeItem(KEY); } catch (e) {} }
  function apply(v) { if (v) html.setAttribute('data-accent', v); else html.removeAttribute('data-accent'); }
  apply(get());
  var options = [['', 'Turkuaz', '#5cc8bd'], ['gold', 'Altın', '#d6b46c'], ['blue', 'Mavi', '#8ab6ee']];
  function build() {
    var style = document.createElement('style');
    style.textContent =
      '.pv-bar{position:fixed;right:16px;bottom:16px;z-index:60;display:flex;align-items:center;gap:4px;padding:6px;' +
      'border-radius:10px;background:#111b31;border:1px solid rgba(148,163,184,.3);box-shadow:0 14px 34px -12px rgba(0,0,0,.7);' +
      'font:600 13px/1 "Source Sans",system-ui,sans-serif;color:#8f9db0}' +
      '.pv-bar span{padding:0 8px 0 6px;letter-spacing:.04em}' +
      '.pv-bar button{display:inline-flex;align-items:center;gap:7px;padding:7px 10px;border-radius:7px;cursor:pointer;' +
      'font:inherit;color:#c3cedb;background:transparent;border:1px solid transparent}' +
      '.pv-bar button::before{content:"";width:10px;height:10px;border-radius:50%;background:var(--sw)}' +
      '.pv-bar button:hover{background:rgba(148,163,184,.1)}' +
      '.pv-bar button[aria-pressed="true"]{border-color:var(--sw);color:#f8fafc}' +
      '@media (max-width:520px){.pv-bar span{display:none}.pv-bar{right:10px;bottom:10px}}' +
      '@media print{.pv-bar{display:none}}';
    document.head.appendChild(style);
    var bar = document.createElement('div');
    bar.className = 'pv-bar';
    bar.setAttribute('role', 'group');
    bar.setAttribute('aria-label', 'Vurgu rengi (yalnızca önizleme)');
    var label = document.createElement('span');
    label.textContent = 'Vurgu rengi';
    bar.appendChild(label);
    var current = get();
    options.forEach(function (o) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = o[1];
      b.style.setProperty('--sw', o[2]);
      b.setAttribute('aria-pressed', String(current === o[0]));
      b.addEventListener('click', function () {
        save(o[0]); apply(o[0]);
        var all = bar.querySelectorAll('button');
        for (var i = 0; i < all.length; i++) all[i].setAttribute('aria-pressed', String(all[i] === b));
      });
      bar.appendChild(b);
    });
    document.body.appendChild(bar);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
