import { existsSync, createReadStream, createWriteStream } from 'fs';
import path from 'path';
import zlib from 'zlib';
import { OPERATION_FAILED, FILE_DECOMPRESSED } from '../constants/index.js';

export async function decompress(pathFile) {
  if (existsSync(path.join(global.currentPath, pathFile))) {
    const READ_FILE_NAME = path.join(global.currentPath, pathFile);
    // bad solution, need to fix asap
    const WRITE_FILE_NAME = path.join(global.currentPath, pathFile.substring(0, pathFile.length - 3));

    // Create read and write streams
    const readStream = createReadStream(READ_FILE_NAME);
    const writeStream = createWriteStream(WRITE_FILE_NAME);

    // Create brotli decompress object
    const brotli = zlib.createBrotliDecompress();

    // Pipe the read and write operations with brotli decompression
    const stream = readStream.pipe(brotli).pipe(writeStream);

    stream.on('finish', () => {
      console.log(FILE_DECOMPRESSED);
    });
  } else {
    console.log(OPERATION_FAILED);
  }
}