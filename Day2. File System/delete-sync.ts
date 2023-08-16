//Deleting a File Synchronously using nodejs
import * as fs from 'fs';

const file: string = 'data.txt';

fs.unlinkSync(file);

console.log('File is deleted successfully');
