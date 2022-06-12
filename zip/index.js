import { compress } from './compress.js';
import { decompress } from './decompress.js';

export async function Zip(command) {
  switch(command[0]) {
    case 'compress':
      compress(command[1])
    break

    case 'decompress':
      decompress(command[1])
    break

  }
}
