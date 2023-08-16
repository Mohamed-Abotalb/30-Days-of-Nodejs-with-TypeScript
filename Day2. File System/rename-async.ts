//Renaming a File Asynchronously using nodejs
import * as fs from 'fs';

const oldFile: string = 'data.txt';
const newFile: string = 'new-data.txt';

fs.rename(oldFile, newFile, (err) => {
  if (err) throw err;
  console.log('File renamed successfully');
});

//To check it's Asynchronous nature !
console.log('This method is Asynchronous');
