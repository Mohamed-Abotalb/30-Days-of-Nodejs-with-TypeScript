//Reading a File Asynchronously using nodejs
//if any error occurs such as file not found
//we don't have permissions , etc
//then an err message will be console.
//otherwise data will be printed
import * as fs from 'fs';

fs.readFile('message.txt', (err, data) => {
  if (err) return console.error(err);

  console.log('Content :  ' + data);
});
