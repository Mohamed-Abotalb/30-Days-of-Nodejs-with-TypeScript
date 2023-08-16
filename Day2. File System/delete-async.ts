//Deleting a File Asynchronously using nodejs
import * as fs from 'fs';

const file: string = 'data.txt';

fs.unlink(file, (err) => {
  if (err) throw err;

  console.log('File is deleted successfully');
});
