const { app, BrowserWindow, ipcMain } = require('electron');
const { v4: uuidv4 } = require('uuid');
const screenshot = require('screenshot-desktop');

const FPS = 300;

//const path = require('path');
const socket = require('socket.io-client')('http://localhost:3000');
let interval;
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
      contextIsolation: false,
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

ipcMain.on('startShare', (event, args) => {
  const room = uuidv4();
  socket.emit('join-message', room);
  event.reply('uuid', room);

  interval = setInterval(() => {
    screenshot().then(img => {
      const image = new Buffer.from(img).toString('base64');

      const obj = {};
      obj.room = room;
      obj.image = image;

      socket.emit('screen-data', JSON.stringify(obj));
    });
  }, FPS);
});

ipcMain.on('stopShare', () => {
  clearInterval(interval);
});
