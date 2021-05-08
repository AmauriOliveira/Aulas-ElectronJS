import { Notifier } from './Notifier.js';
const App = {
  async start() {
    try {
      await Notifier.init();

      Notifier.notify({ title: 'a', body: 'b', icon: '' });
    } catch (error) {
      console.log(error.message);
    }
  },
};

export { App };
