import { read } from './read.js';
import { create } from './create.js';
import { rename } from './rename.js';
import { copy } from './copy.js';
import { move } from './move.js';
import { remove } from './remove.js';

export async function Files(command) {
  switch(command[0]){
    case 'cat':
      read(command[1]);
    break

    case 'add':
      create(command[1]);
    break

    case 'rn':
      rename(command[1], command[2]);
    break

    case 'cp':
      copy(command[1], command[2]);
    break

    case 'mv':
      move(command[1], command[2]);
    break

    case 'rm':
      remove(command[1]);
    break
  }
}
