import fs from 'fs'
import path from 'path'
import { NO_SUCH_FOLDER, OPERATION_FAILED } from '../constants/index.js'

export async function Directories(command) {
  switch(command[0]) {
    case 'cd':
      cd(command[1]);
    break;

    case 'ls':
      ls();
    break;

    case 'up':
      up();
    break;
  }
}

async function cd(newPath) {
  if (newPath) {
    if (fs.existsSync(path.join(global.currentPath,newPath))) {
      global.oldPath = global.currentPath;
      global.currentPath = path.join(global.oldPath, newPath);
    } else {
      console.log(NO_SUCH_FOLDER);
    }
  }
}

async function ls() {
  fs.readdir(global.currentPath, (err, files) => {
    if(err) return console.log(OPERATION_FAILED);
    files.forEach(element => {
      console.log(element);
    });
  })
}

async function up() {
  global.currentPath = path.join(global.currentPath, '..');
}
