import path from 'path';
import { renameSync, existsSync } from 'fs';
import { OPERATION_FAILED } from '../constants/index.js';

export async function rename(pathFile, newFileName) {
  if(pathFile,newFileName) {
    if(existsSync(path.join(global.currentPath, pathFile))) {
        const sourceFile = path.join(global.currentPath, pathFile)
        const copiedFile = path.join(global.currentPath, newFileName)
        renameSync(sourceFile, copiedFile);

        if(existsSync(copiedFile)) {
          console.log(`File ${sourceFile} was successfully renamed to ${copiedFile}`);
        }
    } else {
      console.log(OPERATION_FAILED);
    }
  } else {
    console.log(OPERATION_FAILED);
  }
}
