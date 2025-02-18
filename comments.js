//Create web server
//Create a web server that listens to requests on port 3000 and serves the comments.html file. 
//The comments.html file should be stored in a folder named public.
//Use the fs module to read the comments.html file from the disk.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./public/comments.html', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html',
      });
      res.end(data);
    }
  });
});

server.listen(3000);