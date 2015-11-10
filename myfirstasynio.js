//My First Async I/O
var fs = require('fs');
var file = process.argv[2];
var contentLength = undefined;

function parseFile(callback) {
	fs.readFile(file,'utf8', function(err,fileContents) {
		contentLength = fileContents.split('\n').length-1;
		callback()
	});
}

function showContents() {
	console.log(contentLength);
}


parseFile(showContents);
