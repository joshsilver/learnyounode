//http client
var http = require('http'),
	url = process.argv[2];


function getResponse(url) { 
		var content = '';
		http.get(url, function(res) {
			res.setEncoding('utf8');
			res.on('data', console.log);
			res.on('error',console.error); 

	})

}
	
var scoopURL1 = getResponse(url);
