function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let timerId = null;

buttonStart.addEventListener('click', onButtonStart);

function onButtonStart(evt) {
  evt.target.setAttribute('disabled', '');

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

buttonStop.addEventListener('click', onButtonStop);


function onButtonStop() {
  buttonStart.removeAttribute('disabled');
  clearInterval(timerId);
}
