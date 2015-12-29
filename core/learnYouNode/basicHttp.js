var http = require('http'),
	targetUrl = process.argv[2];

http.get(targetUrl, function(response) {
	response.setEncoding('utf8');
	response.on("data", console.log);
	response.on('error', console.error);
});