var http = require('http'),
	bl   = require('bl'),
	targetUrlOne     = process.argv[2],
	targetUrlTwo     = process.argv[3],
	targetUrlThree   = process.argv[4],
	resultCollection = [];

http.get(targetUrlOne, function(response) {
	response.pipe(bl(function(err, data) {
		if (err)
			return console.error(err);

		resultCollection.push(data.toString());

		http.get(targetUrlTwo, function(response) {
			response.pipe(bl(function(err, data) {
				if (err)
					return console.error(err);

				resultCollection.push(data.toString());

				http.get(targetUrlThree, function(response) {
					response.pipe(bl(function(err, data) {
						if (err)
							return console.error(err);

						resultCollection.push(data.toString());

						resultCollection.forEach(function(item) {
							console.log(item);
						});
						
					}));
				});
				
			}));
		});

	}));
});

/*
Alternative:
Note: Nice because not nesting async calls

     var http = require('http'),
     	 bl = require('bl'),
     	 results = [],
     	 count = 0,

     function printResults () {  
       for (var i = 0; i < 3; i++)  
         console.log(results[i])  
     }

     function httpGet (index) {  
       http.get(process.argv[2 + index], function (response) {  
         response.pipe(bl(function (err, data) {  
           if (err)  
             return console.error(err)  
       
           results[index] = data.toString()  
           count++  
       
           if (count == 3)  
             printResults()  
         }))  
       })  
     }  
       
     for (var i = 0; i < 3; i++)  
       httpGet(i)
*/