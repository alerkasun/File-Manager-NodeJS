import { createReadStream, createWriteStream, existsSync } from 'fs';
import zlib from 'zlib';
import path from 'path';
import { OPERATION_FAILED, FILE_COMPRESSED } from '../constants/index.js';

export async function compress(pathFile) {
  if (existsSync(path.join(global.currentPath,pathFile))) {
    const READ_FILE_NAME = path.join(global.currentPath, pathFile);
    const WRITE_FILE_NAME = path.join(global.currentPath, `${pathFile}.br`);

    // Create read and write streams
    const readStream = createReadStream(READ_FILE_NAME);
    const writeStream = createWriteStream(WRITE_FILE_NAME);

    // Create brotli compress object
    const brotli = zlib.createBrotliCompress();

    // Pipe the read and write operations with brotli compression
    const stream = readStream.pipe(brotli).pipe(writeStream);

    stream.on('finish', () => {
      console.log(FILE_COMPRESSED);
    });
  } else {
    console.log(OPERATION_FAILED);
  }
}
