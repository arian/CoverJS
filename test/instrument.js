"use strict";


var Instrument = require('../lib/Instrument');
var fs = require('fs');

var code = fs.readFileSync(__dirname + '/fixture.js') + '';

var instrument = new Instrument(code, 'test/fixture.js');
var instrumented = instrument.instrument();

console.log(instrumented);
