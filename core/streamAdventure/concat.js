var concat  = require('concat-stream'),
	reverse = concat(reverseMe);

function reverseMe(stream) {
	process.stdout.write(stream.toString().split('').reverse().join(''));
}

process.stdin
	.pipe(reverse);

/*
	Reference solution (kinda):

	function reverseMe(stream) {
		var s = stream.toString().split('').reverse().join('');
		console.log(s);
	}
*/