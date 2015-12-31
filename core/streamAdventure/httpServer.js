var http   = require('http'),
	map	   = require('through2-map'),
	port   = process.argv[2];

var server = http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});

	if (req.method !== 'POST')
		return console.log('POST not detected!');

	req.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res);
	
});

server.listen(port);

/*
	Reference Answer (completely different):
	
	var http = require('http');
	var through = require('through2');

	var server = http.createServer(function (req, res) {
	  if (req.method === 'POST') {
	      req.pipe(through(function (buf, _, next) {
	          this.push(buf.toString().toUpperCase());
	          next();
	      })).pipe(res);
	  }
	  else res.end('send me a POST\n');
	});
	server.listen(parseInt(process.argv[2]));
*/