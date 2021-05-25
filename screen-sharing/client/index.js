const ipcRenderer = require('electron').ipcRenderer;

window.onload = () => {};

function startShare() {
  ipcRenderer.send('startShare', {});
  document.getElementById('start').style.display = 'none';
  document.getElementById('stop').style.display = 'block';
}
function stopShare() {
  ipcRenderer.send('stopShare', {});
  document.getElementById('start').style.display = 'black';
  document.getElementById('stop').style.display = 'none';
}
