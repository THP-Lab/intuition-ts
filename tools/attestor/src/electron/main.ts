// import * as fs from 'fs'
import * as path from 'path'

// import csv from 'csv-parser'
import { app, BrowserWindow, dialog, ipcMain } from 'electron'
import { CSVData, readCSVFile } from '../common/csv'

// // Todo: Modify this to match the structure of our data
// interface CSVData {
//   // Define the structure of your data here
//   field1: string
//   field2: string
//   field3: string
//   field4: string
//   field5: string
//   // ...
// }

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: true,
    },
  })

  mainWindow.loadFile(path.join(__dirname, 'index.html'))

  // Listen for the open-file-dialog event from renderer process
  ipcMain.handle('open-file-dialog', async () => {
    console.log('Hit open file dialog')
    const result = await dialog.showOpenDialog(mainWindow, {
      properties: ['openFile'],
      filters: [{ name: 'CSV Files', extensions: ['csv'] }],
    })

    if (!result.canceled && result.filePaths.length > 0) {
      const filePath = result.filePaths[0]
      const data: CSVData[] = await readCSVFile(filePath)
      mainWindow.webContents.send('csv-data', data)
      performCommands(data)
    }
  })
}

// const readCSVFile = (filePath: string): Promise<CSVData[]> => {
//   return new Promise((resolve, reject) => {
//     const results: CSVData[] = []
//     fs.createReadStream(filePath)
//       .pipe(csv())
//       .on('data', (data: CSVData) => results.push(data))
//       .on('end', () => resolve(results))
//       .on('error', (error: Error) => reject(error))
//   })
// }

const performCommands = (data: CSVData[]) => {
  data.forEach((item) => {
    console.log('Performing command with:', item)
    // Add your command logic here
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
