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
    const html = await response.text();
    let temp = document.createElement('template');
    temp.innerHTML = html.trim();
    elem.appendChild(temp.content.firstChild);
  }

  const btnShowJS = cvCode.querySelector('#cv-code-show-js');
  const btnShowPS = cvCode.querySelector('#cv-code-show-ps');
  const btnShowHS = cvCode.querySelector('#cv-code-show-hs');
  const btnCloseJS = codeExJS.firstElementChild;
  const btnClosePS = codeExPS.firstElementChild;
  const btnCloseHS = codeExHS.firstElementChild;

  btnShowJS._code = btnCloseJS._code = codeExJS;
  btnShowPS._code = btnClosePS._code = codeExPS;
  btnShowHS._code = btnCloseHS._code = codeExHS;

  for (let btn of [btnShowJS, btnShowPS, btnShowHS]) {
    btn.addEventListener('click', () => btn._code.showModal());
  }

  for (let btn of [btnCloseJS, btnClosePS, btnCloseHS]) {
    btn.addEventListener('click', () => btn._code.close());
  }
})();
