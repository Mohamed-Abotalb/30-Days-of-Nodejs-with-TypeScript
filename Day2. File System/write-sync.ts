//Writing a File Synchronously using nodejs
import * as fs from 'fs';

const content: string = 'this is the content in the file';

const filePath: string = './write-message.txt';

fs.writeFileSync(filePath, content);

console.log('File Written Successfully');
