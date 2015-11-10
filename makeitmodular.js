//Make it modular
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
