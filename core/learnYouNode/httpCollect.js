var http = require('http'),
	bl   = require('bl'),
	targetUrl = process.argv[2],
	counter = 0;

http.get(targetUrl, function(response) {
	response.pipe(bl(function(err, data) {
		if (err)
			return console.error(err);

		data.forEach(function(character) {
			counter++;
		});

		console.log(counter);
		console.log(data.toString());

		/*
		Alternative:
		var dataStr; <-- up top somewhere

		dataStr = data.toString(); <-- storing value in memory
		console.log(data.length);  <-- free property access, thanks String prototype
		console.log(data);
		*/
	}));
});