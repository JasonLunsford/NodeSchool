function repeat(operation, num) {

	if (num <= 0) return;

	operation();
	// mod 10 is arbitrary
	if (num % 10 === 0) {
		// breaks recursion, gives other I/O operations a chance to fire
		// even with no explict time value set
		setTimeout(function() {
			repeat(operation, --num);
		});
	} else {
		repeat(operation, --num);
	}

}

module.exports = repeat;