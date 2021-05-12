const { app, BrowserWindow } = require('electron');

function createWindow() {
	const win = new BrowserWindow({
		width: 400,
		height: 300,
		//autoHideMenuBar: true, // hide menu bar
		//frame: false, // esconde tudo em volta da janela
		resizable: false,
		fullscreenable: false,
		webPreferences: {
			nodeIntegration: 'false', // não vai utilizar nada do node
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
