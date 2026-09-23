/* besimagargun.com - small helpers. The site works without JavaScript;
   this only adds the "Cite" pop-up (BibTeX with copy / download). */
(function () {
  var dialog, pre, dl, copyBtn, copyLabel;

  function icon(name) {
    var root = document.documentElement.getAttribute('data-root') || '';
    return '<svg class="icon" aria-hidden="true"><use href="' + root + 'assets/icons.svg#' + name + '"></use></svg>';
  }

  function build() {
    dialog = document.createElement('dialog');
    dialog.className = 'cite-dialog';
    dialog.setAttribute('aria-labelledby', 'cite-title');
    dialog.innerHTML =
      '<header><h2 id="cite-title">Cite</h2>' +
      '<button type="button" class="close" aria-label="Close">' + icon('x-mark') + '</button></header>' +
      '<pre></pre>' +
      '<footer><a class="dl" download>' + icon('arrow-down-tray') + 'Download .bib</a>' +
      '<button type="button" class="primary copy">' + icon('clipboard-document') + '<span>Copy</span></button></footer>';
    document.body.appendChild(dialog);
    pre = dialog.querySelector('pre');
    dl = dialog.querySelector('a.dl');
    copyBtn = dialog.querySelector('button.copy');
    copyLabel = copyBtn.querySelector('span');
    dialog.querySelector('.close').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
    copyBtn.addEventListener('click', function () {
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(pre.textContent).then(function () {
        copyLabel.textContent = 'Copied';
        setTimeout(function () { copyLabel.textContent = 'Copy'; }, 1800);
      });
    });
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('a[data-cite]');
    if (!link || typeof HTMLDialogElement === 'undefined' || !window.fetch) return;
    e.preventDefault();
    if (!dialog) build();
    var url = link.getAttribute('href');
    fetch(url).then(function (r) { return r.text(); }).then(function (text) {
      pre.textContent = text.trim();
      dl.setAttribute('href', url);
      copyLabel.textContent = 'Copy';
      dialog.showModal();
    }).catch(function () { window.location.href = url; });
  });

  var y = document.querySelectorAll('[data-year]');
  for (var i = 0; i < y.length; i++) y[i].textContent = new Date().getFullYear();
})();
