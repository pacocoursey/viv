const { app, BrowserWindow } = require('electron');
const prepareNext = require('electron-next');
const isDev = require('electron-is-dev');
const { format } = require('url');
const path = require('path');

app.on('ready', async () => {
  await prepareNext('src/renderer');

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  const devPath = 'http://localhost:8000/start';

  const prodPath = format({
    pathname: path.join(__dirname, '/renderer/out/start/index.html'),
    protocol: 'file',
    slashes: true,
  });

  const url = isDev ? devPath : prodPath;
  mainWindow.loadURL(url);
});

app.on('window-all-closed', app.quit);
