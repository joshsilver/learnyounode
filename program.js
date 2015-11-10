//Baby Steps
/*
var array = process.argv;
var sum = 0;
i = 2;
while (array.length > i) {
	sum += Number(array[i]);
	i++;
}

console.log(sum);
*/

//My First I/O
/*
var fs = require('fs');
var readFile = fs.readFileSync(process.argv[2],'utf8');
console.log(readFile.split('\n').length-1);
*/

//My First Async I/O
/*var fs = require('fs');
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
*/

//Filtered LS
/*
var fs = require('fs'),
	path = require('path'),
	directory = process.argv[2],
	filetype = "." + process.argv[3];


	fs.readdir(directory, function(err,list) {

		list.forEach(function (filename) {
			if (path.extname(filename)==filetype) {
				console.log(filename);
			} 
		});
		
	});
*/

//Make it modular
/*
var	directory = process.argv[2],
	filetype = process.argv[3];


var filefilter = require('./filefilter');

function displayFiles(done) {
	filefilter(directory,filetype, function(err,files) {
		if (err) {
			console.log('An error occured: ' + err);
			return err;
		}

		files.forEach(function(file) {
			console.log(file);
		});

	})
}

displayFiles();
*/
//http client
/*
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
*/
//http collect
/*
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
*/







