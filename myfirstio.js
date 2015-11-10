//My First I/O
var fs = require('fs');
var readFile = fs.readFileSync(process.argv[2],'utf8');
console.log(readFile.split('\n').length-1);

