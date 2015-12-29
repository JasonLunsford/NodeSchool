var mymodule = require('./fileFilterModule.js');

mymodule(process.argv[2], process.argv[3], function(err, data) {
	if (err)
		console.log("WTF?");

	data.forEach(function(file) {
		console.log(file);
	});
});