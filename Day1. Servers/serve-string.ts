// serve-string.js
import * as http from 'http';

const host = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello, World!\n');
  response.write('Hello, Mohamed!');
  response.end();
});

server.listen(port, host, () => {
  console.log('Server is listening on ' + host + ':' + port);
});
