import path from 'path';
import { createReadStream, createWriteStream, existsSync, rm } from 'fs';
import { OPERATION_FAILED } from '../constants/index.js';

export async function move(pathFile, newPath) {
  if (pathFile, newPath) {
    if (existsSync(path.join(global.currentPath,pathFile))
      && existsSync(path.join(global.currentPath,newPath))) {
        const readFile = createReadStream(path.join(global.currentPath, pathFile), { encoding:'utf-8' });
        const writeFile = createWriteStream(path.join(global.currentPath, newPath, pathFile.split('/')[pathFile.split('/').length - 1]));
        readFile.pipe(writeFile);
        rm(path.join(global.currentPath,pathFile), (err) => {
          if (err) return console.log(OPERATION_FAILED);
        })
      } else {
      console.log(OPERATION_FAILED);
    }
  } else {
    console.log(OPERATION_FAILED);
  }
}
