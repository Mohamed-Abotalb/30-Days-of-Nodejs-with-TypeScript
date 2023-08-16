//Appending a File Asynchronously using nodejs
import * as fs from 'fs';

const newData: string = 'This data will be appended at the end of the file.';

const filePath: string = './input.txt';

fs.appendFile(filePath, newData, (err) => {
  if (err) throw err;
  console.log('The new_content was appended successfully');
});
