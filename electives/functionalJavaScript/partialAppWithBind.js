module.exports = function(message) {
	return console.log.bind(null, message);
};

/*
	Official Solution

	module.exports = function(message) {
		// Thing to remember here, you can bind to console.log and return the whole
		// mess to the parent scope. BINDING TO CONSOLE.LOG IS A THING!!
		return console.log.bind(null, message);
	};
*/