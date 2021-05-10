import { View } from './View.js';

const oneSecond = 1000;
const minute = 60;
const oneHour = 60 * minute;

const Timer = {
  time: 25 * 60,
  currentTime: 0,
  interval: null,

  timeToMinutes: (time) => Math.floor(time / 60),
  timeToSeconds: (time) => time % 60,
  formatTime: (time) => String(time).padStart(2, '0'),

  init(time) {
    Timer.currentTime = time || oneHour;

    Timer.interval = setInterval(Timer.countDown, oneSecond);
  },

  countDown() {
    Timer.currentTime--;

    const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime));
    const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime));

    View.render({ minutes, seconds });
    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval);
      return;
    }
  },
};

export { Timer };
