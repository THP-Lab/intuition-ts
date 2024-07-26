const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
  submitData: () => ipcRenderer.invoke('submit-data'),
  onCSVData: (callback) =>
    ipcRenderer.on('csv-data', (event, data) => callback(data)),
})
