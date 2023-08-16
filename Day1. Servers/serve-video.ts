// serve-audio.js
import * as http from 'http';
import * as fs from 'fs';

const host = 'localhost';
const port: number = 3000;

const server = http.createServer((request, response) => {
  // change the MIME type to 'audio/mp3'
  response.writeHead(200, { 'Content-Type': 'video/mp4' });

  // check if the audio file is present or not
  const videoFilePath: string = './video.mp4';
  const existFile: boolean = fs.existsSync(videoFilePath);
  if (existFile) {
    const readStream = fs.createReadStream(videoFilePath);
    readStream.pipe(response);
  } else {
    response.end("It's 404.");
  }

  console.log('Server running');
});

server.listen(port, host, () => {
  console.log('Server is listening on ' + host + ':' + port);
});
