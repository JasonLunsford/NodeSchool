var slice = Array.prototype.slice;

function logger(namespace) {
	var _namespace = namespace;
	return function (message) {
		var _message = slice.call(arguments).join(' ');
		console.log(_namespace + " " + _message);
	};
}

module.exports = logger;

/*
	Official Solution (insanity follows):

	// brilliant trick, assign useful methods from core objects for easy use
    var slice = Array.prototype.slice
    
    function logger(namespace) {
      return function() {
        console.log.apply(console, [namespace].concat(slice.call(arguments)))  <-- WTF?!?
        1) Apparently log is a method off of console? Good to know.
		2) Instructions said to ignore first parameter of Function.prototype.apply() (pass a null), so what is
		   console doing there? What purpose is it serving?
		3) Clever to concat array with other array, but very obscure trick
      }
    }
    
    module.exports = logger

*/