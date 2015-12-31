function foo() {
	var bar;
	quux = 6;

	function zip() {
		var quux = 5;
		bar = true;
	}
	return zip;
}