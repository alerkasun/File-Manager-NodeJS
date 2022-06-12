import { Directories } from '../directories/index.js';
import { Files } from '../files/index.js';
import { OS } from '../os/index.js';
import { Hash } from '../hash/index.js';
import { Zip } from '../zip/index.js';
import { INVALID_INPUT } from '../constants/index.js'

export async function Commands(action) {
  const command = action.split(' ')
  switch(command[0]) {
    case 'cd':
    case 'ls':
    case "up":
      Directories(command);
    break;

    case 'cat':
    case 'add':
    case 'rn':
    case 'cp':
    case 'mv':
    case 'rm':
      Files(command);
    break
    
    case 'os':
      OS(command);
    break

    case 'hash':
      Hash(command);
    break

    case 'compress':
    case 'decompress':
      Zip(command);
    break

    default:
      console.log(INVALID_INPUT);
    break
  }
}
