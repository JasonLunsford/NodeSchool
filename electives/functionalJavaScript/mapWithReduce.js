module.exports = function arrayMap(arr, fn) {
	var map = Array.prototype.map;
	return map.call(arr, function(item) {
		return fn(item);
	});
};

/*
	Official Solution
	// My solution did not use reduce :-(
    module.exports = function arrayMap(arr, fn, thisArg) {
      return arr.reduce(function(acc, item, index, arr) {
        acc.push(fn.call(thisArg, item, index, arr))  <-- still processing this line in my brain
        return acc
      }, [])
    }
*/