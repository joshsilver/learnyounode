//Filtered LS
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
