import * as http from 'node:http';
import * as fs from 'node:fs';

http.createServer(function (req, res) {
  let q = new URL(req.url, 'http://localhost:8080');

  if (q.pathname === '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    })
  } else if (q.pathname === '/about') {
    fs.readFile('about.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    })
  } else if (q.pathname === '/contact-me'){
    fs.readFile('contact-me.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    })
  } else {
    fs.readFile('404.html', function(err, data) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    })
  }
}).listen(8080); 