// serve-audio.js
import * as http from 'http';
import * as fs from 'fs';

const host = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {
  // change the MIME type to 'audio/mp3'
  response.writeHead(200, { 'Content-Type': 'audio/mp3' });

  // check if the audio file is present or not
  const existFile = fs.existsSync('./audio.mp3');
  if (existFile) {
    const readStream = fs.createReadStream('./audio.mp3');
    readStream.pipe(response);
  } else {
    response.end("It's 404.");
  }

  console.log('Server running');
});

server.listen(port, host, () => {
  console.log('Server is listening on ' + host + ':' + port);
});
