function getShortMessages(messages) {
	return messages.filter(function(messageObj) {
		if ('message' in messageObj && messageObj.message.length < 50) {
			return true;
		}
		return false;
	}).map(function(result) {
		return result.message;
	});
}

module.exports = getShortMessages;

/*
	Official Solution:

	function getShortMessages(messages) {
		return messages.filter(function(item) {
			return item.message.length < 50;
		}).map(function(item) {
			return item.message;
		})
	}
*/