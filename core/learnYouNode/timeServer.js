var net 	= require('net'),
	timeObj = require('./timeServerModule.js'),
	port 	= process.argv[2];

var server = net.createServer(function(socket) {
	socket.end(timeObj(function(date) {
		return date + "\n";
	}));
});

server.listen(port);