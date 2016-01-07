function duckCount() {
	var args = Array.prototype.slice.call(arguments);

	return args.filter(function(arg) {
		if (Object.prototype.hasOwnProperty.call(arg, 'quack')) return true;
	}).map(function(duckObj, index, array) {
		return duckObj;
	}).length;

}

module.exports = duckCount;

/*
	Official Solution:

    function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length
    }
    
    module.exports = duckCount
*/