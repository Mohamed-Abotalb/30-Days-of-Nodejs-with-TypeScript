import * as fs from 'fs';

const nSCallback = (error: any, data: Buffer) => {
  if (error) {
    return console.error('Error : ', error);
  }
  console.log(data);
};
fs.readFile('file_that_exists', nSCallback);
fs.readFile('file_does_not_exists', nSCallback);
