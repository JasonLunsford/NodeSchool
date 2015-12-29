var fs = require('fs'),
	path = require('path'),
	fileArray = [];

module.exports = function filterFunction(dirName, fileExt, callback) {
	fs.readdir(dirName, function(err, list) {
		if (err)
			return callback(err);

		list.forEach(function(file) {
			if (path.extname(file) === "."+fileExt)
				fileArray.push(file);
		});

		return callback(null, fileArray);
	});
};