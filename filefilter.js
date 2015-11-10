var fs = require('fs'),
	path = require('path');


module.exports = function(directory,filetype,callback) {
	var files = [];

	fs.readdir(directory, function(err,list) {
		if (err) {
			return callback(err);
		}


		list.forEach(function (filename) {
			if (path.extname(filename)===("."+filetype)) {
				files.push(filename);
			} 
		});
		
		callback(null, files);

	});
}