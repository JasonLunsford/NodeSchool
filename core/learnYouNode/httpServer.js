var http   = require('http'),
	fs 	   = require('fs'),
	port   = process.argv[2],
	source = process.argv[3],
	fileSrc;

fileSrc = fs.createReadStream(source);

var server = http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});

	fileSrc.pipe(res);
});

server.listen(port);