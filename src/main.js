const { app, BrowserWindow, systemPreferences } = require('electron');
const ipc = require('electron-better-ipc');

let mainWindow;

/* eslint-disable */
require('electron-unhandled')();

try {
	require('electron-reloader')(module);
} catch (err) {}
/* eslint-enable */

async function updateTheme() {
  await ipc.callRenderer(mainWindow, 'theme-change', systemPreferences.isDarkMode());
}

function createMainWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
    titleBarStyle: 'hiddenInset',
    show: false,
  });

  win.loadURL(`file://${__dirname}/index.html`);
  win.on('closed', () => {
    mainWindow = null;
  });

  win.on('ready-to-show', () => {
    setTimeout(() => {
      win.show();
    }, 100);
  });

  win.isDark = systemPreferences.isDarkMode();


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
  updateTheme();
});

systemPreferences.subscribeNotification(
  'AppleInterfaceThemeChangedNotification',
  async () => {
    if (mainWindow) {
      await ipc.callRenderer(mainWindow, 'theme-change', systemPreferences.isDarkMode());
    }
  },
);
