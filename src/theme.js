const ipc = require('electron-better-ipc');
const { remote } = require('electron');

const { isDark } = remote.getCurrentWindow();

function updateTheme(dark) {
  if (dark) document.body.classList.add('dark');
  else document.body.classList.remove('dark');
}

// Update theme on first load
updateTheme(isDark);

// Update theme on message from main
ipc.answerMain('theme-change', async (dark) => {
  updateTheme(dark);
});
