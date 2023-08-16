//Appending a File Asynchronously using nodejs
import * as fs from 'fs';

const content: string =
  'We are Appending this file synchronously using node.js';

const filePath: string = './input.txt';

fs.appendFileSync(filePath, content);

console.log('File Appended Successfully');
