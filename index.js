const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
  let q = url.parse(req.url, true);

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
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    })
  }
}).listen(8080); 