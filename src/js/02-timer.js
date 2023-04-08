// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputEl: document.querySelector('input[type="text"]'),
  buttonStartEl: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    const diff = selectedDates[0] - currentDate;

    if (diff < 0) {
      // window.alert('Please choose a date in the future');
      Notify.failure('Please choose a date in the future');
      return;
    }
    refs.buttonStartEl.removeAttribute('disabled');
  },
};

flatpickr(refs.inputEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

refs.buttonStartEl.addEventListener('click', startTimer);

function startTimer() {
  timerId = setInterval(countDownTimeToSelectDate, 1000);
  // refs.buttonStartEl.removeEventListener('click', startTimer);
  // refs.buttonStartEl.setAttribute('disabled', '');
}

function countDownTimeToSelectDate() {
  const currentDate = new Date();
  const selectedDates = new Date(refs.inputEl.value);
  const diff = selectedDates - currentDate;

  if (diff < 0) {
    clearInterval(timerId);
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(diff);
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}
