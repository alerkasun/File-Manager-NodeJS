import { EOL, cpus, homedir, userInfo, arch } from 'os';
import { INVALID_INPUT } from '../constants/index.js';

export async function OS(command) {

  switch(command[1]) {
    case '--EOL':
      console.log(JSON.stringify(EOL));
    break

    case '--cpus':
      console.log(cpus());
    break
    
    case '--homedir':
      console.log(homedir());
    break
    
    case '--username':
      console.log(userInfo().username);
    break
    
    case '--architecture':
      console.log(arch());
    break

    default:
      console.log(INVALID_INPUT);
    break
  }
}