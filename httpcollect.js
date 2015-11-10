//http collect
var http = require('http'),
	url = process.argv[2],
	content;


function getResponse(callback) {
		

		http.get(url, function(response) {
			response.setEncoding('utf8');
			var content ='';
			response.on('data', function(data) {
				content+= data;
			});
			response.on('end', function() {
				callback(content);
			})


		})

}

function showContents(data) {
	console.log(data.length);
	console.log(data);
}


getResponse(showContents);