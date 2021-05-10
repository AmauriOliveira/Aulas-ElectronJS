import { Notifier } from './Notifier.js';
import { Timer } from './Timer.js';
import { Emitter } from './Emitter.js';
const App = {
  async start() {
    try {
      Timer.init(60);
      await Notifier.init();

      Notifier.notify({ title: 'a', body: 'b', icon: '' });
    } catch (error) {
      console.log(error.message);
    }
  },
};

export { App };
