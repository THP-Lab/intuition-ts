import fs from 'fs'
import csv from 'csv-parser'

export interface CSVData {
  // Define the structure of your data here
  field1: string
  field2: string
  field3: string
  field4: string
  field5: string
  // ...
}

export const readCSVFile = (filePath: string): Promise<CSVData[]> => {
    return new Promise((resolve, reject) => {
      const results: CSVData[] = []
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data: CSVData) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', (error: Error) => reject(error))
    })
  }