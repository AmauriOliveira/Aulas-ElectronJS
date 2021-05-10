import { View } from './View.js';
import { Emitter } from './Emitter.js';

const oneSecond = 1000;

const Timer = {
	time: 60 * 60,
	currentTime: 0,
	interval: null,

	timeToMinutes: time => Math.floor(time / 60),
	timeToSeconds: time => time % 60,
	formatTime: time => String(time).padStart(2, '0'),

	init(time) {
		Emitter.emit('countDown-start');
		Timer.time = time || Timer.time;
		Timer.currentTime = Timer.time;
		Timer.interval = setInterval(Timer.countDown, oneSecond);
	},

	countDown() {
		Timer.currentTime--;

		const minutes = Timer.formatTime(
			Timer.timeToMinutes(Timer.currentTime)
		);
		const seconds = Timer.formatTime(
			Timer.timeToSeconds(Timer.currentTime)
		);

		View.render({ minutes, seconds });
		if (Timer.currentTime === 0) {
			clearInterval(Timer.interval);
			Emitter.emit('countDown-end');
			return;
		}
	},
};

export { Timer };
