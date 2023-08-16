// serve-pdf.js
import * as http from 'http';
import * as fs from 'fs';

const host = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {
  // change the MIME type to 'application/pdf'
  response.writeHead(200, { 'Content-Type': 'application/pdf' });
  fs.readFile('./index.pdf', (err, data: Buffer) => {
    if (err) {
      const errorMsg = { status: 'error', msg: err };
      response.end(JSON.stringify(errorMsg));
    } else {
      response.write(data);
      console.log('Server is Working');
      response.end();
    }
  });
});

server.listen(port, host, () => {
  console.log('Server is listening on ' + host + ':' + port);
});
