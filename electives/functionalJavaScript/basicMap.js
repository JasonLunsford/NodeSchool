function doubleAll(numbers) {
	var result = [];
	numbers.map(function(input) {
		result.push(input * 2);
	});

	return result;
}

module.exports = doubleAll;

/*
	Official Solution:

	function doubleAll(numbers) {
		return numbers.map(function double(num) {
			return num * 2;
		})
	}
*/