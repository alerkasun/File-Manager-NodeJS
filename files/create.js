import path from 'path';
import fs from 'fs';
import { FILE_EXISTS } from '../constants/index.js';

export async function create(nameFile) {
  if(!fs.existsSync(path.join(global.currentPath,nameFile))) {
    fs.createWriteStream(path.join(global.currentPath,nameFile));
    console.log(`File ${nameFile} created`);
  } else {
    console.log(FILE_EXISTS);
  }
}
