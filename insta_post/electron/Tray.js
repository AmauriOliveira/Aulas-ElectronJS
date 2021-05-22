const { Tray } = require('electron');
const { resolve } = require('path');

const iconPath = resolve(__dirname, '..', 'assets', 'tray.png');

function createTray() {
  const tray = new Tray(iconPath);
  tray.setToolTip('cronometro');
  return tray;
}

module.exports = createTray();
