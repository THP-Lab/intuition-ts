import * as path from 'path'
import { configDotenv, config } from 'dotenv'
import { resolve } from 'path'

configDotenv({
  path: resolve(__dirname, "../../.env")
})

// import csv from 'csv-parser'
import { app, BrowserWindow, dialog, ipcMain } from 'electron'
import { CSVData, readCSVFile } from '../common/csv'
import { attest } from '../attest'

let latestData: CSVData[] = []
let latestURIs: string[] = []
let latestSubmitedData: CSVDataWithURI[] = []
let mainWindow: BrowserWindow

interface CSVDataWithURI extends CSVData {
  URI: string
}

// Window Definition
const createWindow = () => {
  // Construct window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: true,
    },
  })

  // Load HTML file
  mainWindow.loadFile(path.join(__dirname, 'index.html'))

  // Listen for the open-file-dialog event from renderer process
  ipcMain.handle('open-file-dialog', async () => {
    await openFileDialog()
  })

  // Listen for Submit Data Event from renderer
  ipcMain.handle('submit-data', async () => {
    console.log("performing commands")
    await performCommands(latestData)
  })
}

async function openFileDialog(): Promise<void> {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [{ name: 'CSV Files', extensions: ['csv'] }],
  })

  if (!result.canceled && result.filePaths.length > 0) {
    const filePath = result.filePaths[0]
    latestData = await readCSVFile(filePath)
    mainWindow.webContents.send('csv-data', latestData)
  }
}

async function performCommands(data: CSVData[]): Promise<void> {
  try {
    latestURIs = []
    latestSubmitedData = []
    // data.forEach(async (item) => {
    //   console.log('Performing command with:', item)
    //   // Add your command logic here
    //   const URI = await attest(item)
    //   latestURIs.push(URI)
    //   latestSubmitedData.push({ ...item, URI })
    //   // Use the same callback since it works
    //   mainWindow.webContents.send('csv-data', latestSubmitedData)
    // })
      console.log('Performing command with:', data[0])
      // Add your command logic here
      const URI = await attest(data[0])
      latestURIs.push(URI)
      latestSubmitedData.push({ ...data[0], URI })
      // Use the same callback since it works
      mainWindow.webContents.send('csv-data', latestSubmitedData)
  } catch (error) {
    console.error('Error performing commands:', error)
    throw error
  }
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
