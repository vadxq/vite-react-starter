export default function flexible(window, document) {
  const docEl = document.documentElement;
  const dpr = window.devicePixelRatio || 1;

  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + 'px';
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize);
    }
  }

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    if (docEl.clientWidth > 1280) {
      // const rem = docEl.clientWidth / 10;
      const rem = (docEl.clientWidth / 1440) * 16;
      docEl.style.fontSize = rem + 'px';
    }
  }

  // adjust body font size
  setBodyFontSize();

  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports
  if (dpr >= 2) {
    const fakeBody = document.createElement('body');
    const testElement = document.createElement('div');
    testElement.style.border = '.5px solid transparent';
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines');
    }
    docEl.removeChild(fakeBody);
  }
}
