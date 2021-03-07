(function init() {
  const cvCode = document.querySelector('.cv-code');
  const codeExJS = cvCode.querySelector('#cv-code-ex-js');
  const codeExPS = cvCode.querySelector('#cv-code-ex-ps');
  const codeExHS = cvCode.querySelector('#cv-code-ex-hs');

  [codeExJS, codeExPS, codeExHS].map(loadContent);

  async function loadContent(temp) {
    const src = temp.dataset.cvCodeSrc;
    if (!src) throw new Error("No src attribute given.");
    const response = await fetch(src);
    if (response.status !== 200) throw new Error(`Could not load resource: ${src}`);
    const html = await response.text();
    temp.innerHTML = html.trim();
  }

  const btnShowJS = cvCode.querySelector('#cv-code-show-js');
  const btnShowPS = cvCode.querySelector('#cv-code-show-ps');
  const btnShowHS = cvCode.querySelector('#cv-code-show-hs');

  btnShowJS._code = codeExJS;
  btnShowPS._code = codeExPS;
  btnShowHS._code = codeExHS;

  for (let btn of [btnShowJS, btnShowPS, btnShowHS]) {
    btn.addEventListener('click', () => showModal(btn._code));
  }

  const modal = document.querySelector('#cv-modal');

  modal.querySelector('.cv-modal__close')
       .addEventListener('click', () => closeModal());

  function showModal(temp) {
    document.addEventListener('keydown', keydownHandler, false);
    modal.classList.add('cv-modal--visible');
    modal.querySelector('.cv-modal__content')
         .firstElementChild
         .replaceWith(temp.content.cloneNode(true));
  }

  function closeModal() {
    document.removeEventListener('keydown', keydownHandler, false);
    modal.classList.remove('cv-modal--visible');
  }

  function keydownHandler(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      closeModal();
    }
  }
})();
