var fs = require('fs'),
	fileContents = fs.readFileSync(process.argv[2]).toString(),
	fileContentsArray = fileContents.split('\n');

console.log(+fileContentsArray.length - 1);