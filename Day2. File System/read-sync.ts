//Reading a File Synchronously using nodejs
import * as fs from 'fs';

const filePath: string = './message.txt';

const content: Buffer = fs.readFileSync(filePath);

console.log(`Content: ${content}`);
