import * as fs from 'fs';
import { dialog } from 'electron';

interface MyStruct {
    // Define the structure of your data here
    field1: string;
    field2: number;
    // ...
}

function parseCSV(filePath: string): MyStruct[] {
    const csvData = fs.readFileSync(filePath, 'utf-8');
    const lines = csvData.split('\n');
    const headers = lines[0].split(',');

    const result: MyStruct[] = [];

    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i].split(',');
        if (currentLine.length === headers.length) {
            const obj: MyStruct = {} as MyStruct;
            for (let j = 0; j < headers.length; j++) {
                (obj as any)[headers[j]] = currentLine[j];
            }
            result.push(obj);
        }
    }

    return result;
}

function selectCSVFile(): Promise<string | undefined> {
    return new Promise((resolve) => {
        dialog.showOpenDialog({
            filters: [{ name: 'CSV Files', extensions: ['csv'] }],
            properties: ['openFile'],
        }).then((result) => {
            if (!result.canceled && result.filePaths.length > 0) {
                resolve(result.filePaths[0]);
            } else {
                resolve(undefined);
            }
        });
    });
}

function main() {
    selectCSVFile().then((filePath) => {
        if (filePath) {
            const data = parseCSV(filePath);
            console.log(data);
        }
    });
}

main();