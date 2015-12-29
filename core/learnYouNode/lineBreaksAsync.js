var fs = require('fs'),
	fileContentsArray;

// passing options w encoding set to utf8 instead of "toString()"
// just to demonstrate another way to get this done
var options = {
	encoding:"utf8"
};

fs.readFile(process.argv[2], options, function(err, data) {
	if (err)
		throw err;

	fileContentsArray = data.split('\n');
	console.log(+fileContentsArray.length -1 );
});