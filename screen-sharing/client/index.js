const ipcRenderer = require('electron').ipcRenderer;

window.onload = () => {
  ipcRenderer.on('uuid', (event, data) => {
    document.getElementById('code').innerHTML = data;
  });
};

function startShare() {
  ipcRenderer.send('startShare', {});
  document.getElementById('start').style.display = 'none';
  document.getElementById('stop').style.display = 'block';
}
function stopShare() {
  ipcRenderer.send('stopShare', {});
  document.getElementById('start').style.display = 'block';
  document.getElementById('stop').style.display = 'none';
}
