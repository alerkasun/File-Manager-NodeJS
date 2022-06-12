import path from 'path'
import { existsSync, rm } from 'fs'
import { OPERATION_FAILED } from '../constants/index.js';

export async function remove(pathFile) {
  console.log(pathFile, 'pathFile')
  console.log(path.join(global.currentPath, pathFile), 'path.join(global.currentPath, pathFile)')
  if (existsSync(path.join(global.currentPath, pathFile))) {
    rm(path.join(global.currentPath,pathFile), (err) => {
      if (err) return console.log(OPERATION_FAILED);
      console.log(`Deleted file ${path.join(global.currentPath, pathFile)}`);
    })
  } else {
    console.log(OPERATION_FAILED);
  }
}