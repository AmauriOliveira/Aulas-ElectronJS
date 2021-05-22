const { app, BrowserWindow } = require('electron');
//const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 150,
    hasShadow: true,
    autoHideMenuBar: true, // * hide menu bar
    resizable: false,
    fullscreenable: false,
    webPreferences: {
      // TODO: Check
      //preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
