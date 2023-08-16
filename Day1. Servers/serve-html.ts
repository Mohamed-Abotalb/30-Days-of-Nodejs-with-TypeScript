// server-html.js
import * as http from 'http';
import * as fs from 'fs';

const host = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {
  // change the MIME type to 'text/html'
  response.writeHead(200, { 'Content-Type': 'text/html' });

  // reading the content file
  fs.readFile('./index.html', (err, data) => {
    if (err) throw err;
    console.log('Operation success');
    // sending data
    response.end(data);
  });
});

server.listen(port, host, () => {
  console.log('Server is listening on ' + host + ':' + port);
});
