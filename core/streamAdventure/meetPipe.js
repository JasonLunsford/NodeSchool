var fs 		 = require('fs'),
	dataFile = process.argv[2];

fs.createReadStream(dataFile).pipe(process.stdout);