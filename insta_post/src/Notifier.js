const Notifier = {
  async init() {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      throw new Error('Permissão Negada');
    }
  },
  notify({ title, body, icon }) {
    new Notification(title, { body, icon });
  },
};

export { Notifier };
