const { app, BrowserWindow } = require('electron');

/* eslint-disable */
require('electron-unhandled')();

try {
	require('electron-reloader')(module);
} catch (err) {}
/* eslint-enable */

let mainWindow;

function onClosed() {
  mainWindow = null;
}

function createMainWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
  });

  win.loadURL(`file://${__dirname}/index.html`);
  win.on('closed', onClosed);

  return win;
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!mainWindow) {
    mainWindow = createMainWindow();
  }
});

app.on('ready', () => {
  mainWindow = createMainWindow();
});
