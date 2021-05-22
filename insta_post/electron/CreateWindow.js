const { BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 250,
    height: 310,
    show: false, // * esconde da inicialização
    hasShadow: true,
    autoHideMenuBar: true, // * hide menu bar
    frame: false, // * esconde tudo em volta da janela
    resizable: false,
    fullscreenable: false,
    webPreferences: {
      nodeIntegration: 'false', // * não vai utilizar nada do node
    },
  });

  win.loadFile('index.html');

  win.on('blur', () => win.hide());

  return win;
}

module.exports = createWindow();
