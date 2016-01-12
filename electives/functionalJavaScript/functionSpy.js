function Spy(target, method) {
	var _realFunction = target[method],
		_result = {
			count:0
		};

	target[method] = function() {
		_result.count++;
		return _realFunction.apply(target, arguments);
	};

	return _result;
}

module.exports = Spy;