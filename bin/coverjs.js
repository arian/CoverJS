#! /usr/bin/env node

"use strict";

var fs         = require('node-fs');
var path       = require('path');
var Instrument = require('../lib/Instrument');

var files = [];
var dir;

for (var i = 2; i < process.argv.length; i++){
	var arg = process.argv[i];

	if (arg == '--output' || arg == '-o'){
		dir = process.argv[++i];
		continue;
	}

	files.push(arg);

}

if (!dir){
	console.warn('the --output option is required');
	process.exit(1);
}

files.forEach(function(file){

	var code;
	try {
		var filePath = path.resolve(process.cwd, file);
		code = fs.readFileSync(filePath);
	} catch (e){
		console.warn('Could not read ' + file);
		return;
	}

	var instrument   = new Instrument(code, file);
	var instrumented = instrument.instrument();

	var newFile = path.resolve(dir, file);
	var newDir  = path.dirname(newFile);
	console.log(newDir);
	fs.mkdir(newDir, 511 /* 0777 */, true, function(err){
		if (err) throw err;
		fs.writeFileSync(newFile, instrumented);
	});

});
