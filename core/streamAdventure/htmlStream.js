var trumpet = require('trumpet'),
	map		= require('through2-map'),
	tr      = trumpet();

// will select elements with CSS class ".loud" and stream them, when invoked
// data sources from the tr object, which contains all of the markup
var elemStream = tr.select('.loud').createStream();

// pipe selected elements into map, streamed chunks converted into strings, uppercased, returned
// and piped back into elemStream
// works because elemStream is a duplex stream, can pipe out (as it does to map), and accept pipe in
// elemStream "knows" (via trumpet module's internal magic) whether it is sending or receiving 
elemStream.pipe(map(function(input) {
	return input.toString().toUpperCase();
})).pipe(elemStream);

// Separate stream, markup passed via stdin into the core tr object, and passed to stdout
// this is the "main" pipeline, magic is happening upstairs
process.stdin.pipe(tr).pipe(process.stdout);