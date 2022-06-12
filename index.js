import readline from 'readline';
import { homedir } from 'os';
import { Commands } from './commands/index.js';
import { GREETINGS, YOU_ARE_IN, LEAVE_MESSAGE } from './constants/index.js';

global.currentPath = homedir();

const userName = process.argv.splice(2)[0].split('=')[1];
console.log(`${GREETINGS}, ${userName}!`);

const rl = readline.createInterface({input : process.stdin , output : process.stdout});

rl.on('line', async(line)=>{
  if(line === '.exit') {
    rl.close();
  }

  await Commands(line)
  console.log(`${YOU_ARE_IN} ${ global.currentPath }`);
})

rl.on('close', ()=>{
  console.log(`${LEAVE_MESSAGE}, ${userName}!`);
})