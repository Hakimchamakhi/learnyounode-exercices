const fs = require('fs')

str = fs.readFile(process.argv[2],function callback (err, data) {
	if (err){console.error(err)}
	console.log(data.toString().split('\n').length-1) })
