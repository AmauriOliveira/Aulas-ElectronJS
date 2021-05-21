import { Notifier } from './Notifier.js';
import { Timer } from './Timer.js';
import { Emitter } from './Emitter.js';

const notify = Notifier.notify({ title: 'a', body: 'b', icon: '' });

const App = {
	async start() {
		try {
			await Notifier.init();

			Emitter.on('countDown-start', notify);
			Emitter.on('countDown-end', Timer.init);

			Timer.init();
		} catch (error) {
			console.log(error.message);
		}
	},
};

export { App };
