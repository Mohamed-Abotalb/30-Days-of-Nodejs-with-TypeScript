// serve-json.js
import * as http from 'http';
import * as fs from 'fs';

const host = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {
  // change the MIME type to 'application/json'
  response.writeHead(200, { 'Content-Type': 'application/json' });

  //   create JSON
  const jsonResponse = {
    status: 200,
    message: 'successful',
    result: ['sunday', 'monday', 'tuesday', 'wednesday'],
    code: 2000,
  };
  console.log('Server running');
  response.end(JSON.stringify(jsonResponse));
});

server.listen(port, host, () => {
  console.log('Server is listening on ' + host + ':' + port);
});
