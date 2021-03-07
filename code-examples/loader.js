(function init() {
  const cvCode = document.querySelector('.cv-code');
  const codeExJS = cvCode.querySelector('#cv-code-ex-js');
  const codeExPS = cvCode.querySelector('#cv-code-ex-ps');
  const codeExHS = cvCode.querySelector('#cv-code-ex-hs');

  [codeExJS, codeExPS, codeExHS].map(loadContent);

  async function loadContent(elem) {
    const src = elem.dataset.cvCodeSrc;
    if (!src) throw new Error("No src attribute given.");
    const response = await fetch(src);
    if (response.status !== 200) throw new Error(`Could not load resource: ${src}`);
    const content = await response.text();
    elem.innerHTML = content;
  }

  const btnShowJS = cvCode.querySelector('#cv-code-show-js');
  const btnShowPS = cvCode.querySelector('#cv-code-show-ps');
  const btnShowHS = cvCode.querySelector('#cv-code-show-hs');

  btnShowJS._code = codeExJS;
  btnShowPS._code = codeExPS;
  btnShowHS._code = codeExHS;

  for (btn of [btnShowJS, btnShowPS, btnShowHS]) {
    btn.addEventListener('click', (e) => e.target._code.showModal());
  }
})();
