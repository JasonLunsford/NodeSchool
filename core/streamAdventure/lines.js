var through = require('through2'),
	split   = require('split'),
	stream  = through(write, end);

var counter = 1;

function write(buffer, encoding, next) {
	if (counter % 2 === 0)
		this.push(buffer.toString().toUpperCase()+'\n');
	else
		this.push(buffer.toString().toLowerCase()+'\n');

	counter ++;
	next();
}

function end(done) {
	done();
}

process.stdin
	.pipe(split())
	.pipe(stream)
	.pipe(process.stdout);