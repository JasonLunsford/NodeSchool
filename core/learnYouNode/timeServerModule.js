module.exports = function timeObjMaker(callback) {

	var dateObj  = new Date(),
		fullYear = dateObj.getFullYear(),
		month    = dateObj.getMonth()+1,
		date     = dateObj.getDate(),
		hour     = dateObj.getHours(),
		minute   = dateObj.getMinutes();

	var _month  = (month < 10) ? "0"+month+"-" : month+"-",
		_date   = (date < 10) ? "0"+date+" " : date+" ",
		_hour   = (hour < 10) ? "0"+hour+":" : hour+":",
		_minute = (minute < 10) ? "0"+minute : minute;

	return callback(fullYear+"-"+_month+_date+_hour+_minute);
};