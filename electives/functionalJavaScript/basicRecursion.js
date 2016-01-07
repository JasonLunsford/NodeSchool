function reduce(arr, fn, init) {
	if (!arr.length) return init;
	init = fn(init, arr[0]);
	return reduce(arr.slice(1), fn, init);
}

module.exports = reduce;

/*
	Official Solution:

	// cool thing here, no arrays were harmed in the making of this recursive solution. must more inline with the
	// philosophy of functional programming (stateless, pure functions)
    function reduce(arr, fn, initial) {
      return (function reduceOne(index, value) { // interesting trick, return result of recursive IIFE
        if (index > arr.length - 1) return value // end condition
        return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
      })(0, initial) // IIFE. kick off recursion with initial values
    }
    
    module.exports = reduce
*/