import crypto from 'crypto';
import path from 'path';
import { createReadStream } from 'fs';
import { OPERATION_FAILED } from '../constants/index.js';

export async function Hash(pathFile) {
  const hash = crypto.createHash('md5');
  const readFile = createReadStream(path.join(global.currentPath, pathFile[1]));

  readFile.on('data',(text) => {
    hash.update(text);
  })
  
  readFile.on('error',() => {
    console.log(OPERATION_FAILED);
  })
  
  readFile.on('end',() => {
    console.log(hash.digest('hex'));
  })  
}
