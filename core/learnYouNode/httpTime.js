var http   = require('http'),
	url	   = require('url'),
	port   = process.argv[2],
	rawTime,
	result;

var server = http.createServer(function(req, res) {

	if (req.method !== 'GET')
		return console.log('GET not detected!');

	rawTime = new Date(url.parse(req.url, true).query.iso);

	switch(url.parse(req.url, true).pathname) {
		case "/api/parsetime":
			result = makeTimeObj(rawTime);
		break;

		case "/api/unixtime":
			result = makeUnixTimeObj(rawTime);
		break;

		default:
			return console.log('unknown api');
	}

	if (result) {
		res.writeHead(200, {"Content-Type": "application/json"});
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end();
	}

});

function makeTimeObj(time) {
	return {
		"hour":time.getHours(),
		"minute":time.getMinutes(),
		"second":time.getSeconds()
	};
}

function makeUnixTimeObj(time) {
	return { unixtime: time.getTime() };
}

server.listen(port);