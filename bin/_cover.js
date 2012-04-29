"use strict";

var fs         = require('node-fs');
var path       = require('path');
var Async      = require('Supersonic').Async;
var Queue      = require('Supersonic').Queue;
var colors     = require('colors');
var Instrument = require('../lib/Instrument');

// options
var files = [];
var dir;
var recursive = false;

for (var i = 2; i < process.argv.length; i++){
	var arg = process.argv[i];

	if (arg == '--output' || arg == '-o'){
		dir = process.argv[++i];
		continue;
	}

	if (arg == '--recursive' || arg == '-r'){
		recursive = true;
		continue;
	}

	files.push(arg);

}

if (!dir){
	console.warn('the --output option is required');
	process.exit(1);
}

var flow = new Async();

var processFile = function(file){

	return function(ready){

		var queue = new Queue();

		var code, instrumented, newFile;

		queue.push(function(next, finish){

			fs.stat(file, function(err, stat){
				if (err) console.warn(('ERROR:').red.invert + ('Could not open ' + file).red);
				else if (stat.isFile()){
					next();
				} else if (recursive && stat.isDirectory()){
					console.warn(('Recursing into ' + file).yellow);
					fs.readdir(file, function(err, files){
						if (err) throw err;
						files.forEach(function(_file){
							if (_file != '..' || _file != '.') flow.push(processFile(file + '/' + _file));
						});
						finish(false);
					});
				} else {
					console.warn('ERROR: '.red.inverse + ' ' + file + ' is not a file nor a directory');
					finish(false);
				}
			});

		}).push(function(next, finish){

			fs.readFile(file, function(err, data){
				if (err){
					console.warn(('ERROR:').red.invert + ('Could not open ' + file).red);
					finish(false);
				} else {
					code = data + '';
					next();
				}
			});

		}).push(function(next){

			var instrument = new Instrument(code, file);
			instrumented   = instrument.instrument();

			next();

		}).push(function(next){

			newFile    = path.resolve(dir, file);
			var newDir = path.dirname(newFile);

			fs.mkdir(newDir, 511 /* 0777 */, true, function(err){
				if (err) throw err;
				next();
			});

		}).push(function(next){

			fs.writeFile(newFile, instrumented, function(err){
				if (err) throw err;
				next();
			});

		});

		queue.invoke(function(log){
			if (log !== false) console.warn(('READY:').green.inverse + (' ' + file + ' has been instrumented').green);
			ready();
		});

	};

};

files.forEach(function(file){

	flow.push(processFile(file));

});

flow.invoke(function(){
	console.warn(('READY:').green.inverse + (' Instrumented code has been written to ' + dir).green);
});

