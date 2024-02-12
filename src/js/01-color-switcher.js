const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onStartClick(e) {
  refs.startBtn.setAttribute('disabled', 'true');
  refs.stopBtn.removeAttribute('disabled');

  const colorChange = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  function onStopBtn(e) {
    clearInterval(colorChange);
    refs.startBtn.removeAttribute('disabled');
    refs.stopBtn.setAttribute('disabled', 'true');
  }

  refs.stopBtn.addEventListener('click', onStopBtn);
}

refs.stopBtn.setAttribute('disabled', 'true');
refs.startBtn.addEventListener('click', onStartClick);
