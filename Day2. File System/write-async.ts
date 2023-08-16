//Writing a File Asynchronously using nodejs
import * as fs from 'fs';

const content: string = 'this is the content in the file';

const filePath: string = './write-message.txt';

fs.writeFile(filePath, content, (err) => {
  if (err) throw err;

  console.log("It's Saved");
});
