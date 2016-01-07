function countWords(inputWords) {
	var wordHouse = {};

	inputWords.reduce(function(prior, current, index) {
		// catches first word on initialization
		if (index === 1) {
			wordHouse[prior] = 1;
		}

		// catches all instances of current word
		if (wordHouse[current]) {
			wordHouse[current] = wordHouse[current] + 1;
		} else {
			wordHouse[current] = 1;
		}
	});

	return wordHouse;
}

module.exports = countWords;

/*
	Official Solution:

    function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1 -- cool trick
        return countMap
      }, {}) // second argument to reduce initialises countMap to {} - shitty and obtuse technique
    }
    
    module.exports = countWords
*/