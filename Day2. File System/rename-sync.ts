//Renaming a File Synchronously using nodejs
import * as fs from 'fs';

const oldFile: string = 'data.txt';
const newFile: string = 'new-data.txt';

fs.renameSync(oldFile, newFile);
console.log('File renamed successfully');

// To check it's Synchronous nature!
console.log('This method is Synchronous');
