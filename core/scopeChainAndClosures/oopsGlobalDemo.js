function foo() {
	var bar;
	quux = 6; // quux will get assigned to global since "var/let/const" wasn't used

	function zip() {
		var quux = 5; // this quux "shadows" the parent version of quux. legal, but dangerous
	}
}