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