import path from 'path';
import { createReadStream } from 'fs';
import { OPERATION_FAILED } from '../constants/index.js';

export function read(pathFile) {
  const readFile = createReadStream(path.join(global.currentPath,pathFile), { encoding:'utf-8' })

  readFile.on('data', (text) => {
    console.log(text);
  })
  readFile.on('error', () => {
    console.log(OPERATION_FAILED);
  })
}