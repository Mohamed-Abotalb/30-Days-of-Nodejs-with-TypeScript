//Reading a File Asynchronously using nodejs
import * as fs from 'fs';

const filePath: string = './message.txt';

fs.readFile(filePath, (err, data: Buffer) => {
  if (err) throw err;
  console.log(`Content: ${data}`);
});
