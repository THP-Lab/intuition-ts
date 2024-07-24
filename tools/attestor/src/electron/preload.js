const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
  onCSVData: (callback) =>
    ipcRenderer.on('csv-data', (event, data) => callback(data)),
})
