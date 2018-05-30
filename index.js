var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
  if (request.method === 'GET' && request.url === '/hello') {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    fs.readFile('./index.html', 'utf-8', function(err, data) {
      response.write(data);
      response.end();
    });
  } else {
      fs.readFile('./404.jpg', function(err, data) {
        if (err) throw err;
        response.statusCode = 404;
        response.write(data);
        response.end();
      });
    }
});
server.listen(8080);
