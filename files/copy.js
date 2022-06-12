import { existsSync, createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { OPERATION_FAILED } from '../constants/index.js';

export async function copy(pathFile, newPath) {
  if (pathFile, newPath) {
    if( existsSync(path.join(global.currentPath, pathFile))
      && existsSync(path.join(global.currentPath, newPath))) {
        const readFile = createReadStream(path.join(global.currentPath, pathFile), { encoding:'utf-8' });
        const writeFile = createWriteStream(path.join(global.currentPath, newPath, pathFile.split('/')[pathFile.split('/').length - 1]));
        readFile.pipe(writeFile);
      } else {
      console.log(OPERATION_FAILED);
    }
  } else {
    console.log(OPERATION_FAILED);
  }
}
