var through = require('through2'),
	stream  = through(write, end);

// explicit functions, instead of anonymous, both techniques okay
function write(buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase());
	next();
}

// using end and calling done() not strictly necessary, included for
// completeness
function end(done) {
	done();
}

process.stdin.pipe(stream).pipe(process.stdout);