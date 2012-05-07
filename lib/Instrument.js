"use strict";

var esprima = require('esprima');

// create coverage line

var id = 0;

var Instrument = function(code, name){

	if (!name) name = (id++).toString(36);

	this.code = code + '';
	this.name = name + '';

	var quotedName = this.quotedName = JSON.stringify(this.name);
	var quotedCode = this.quotedCode = JSON.stringify(this.code);

	// code that will be prependend or appended
	this.headCode = ''+
		'if (typeof __$coverObject === "undefined"){\n' +
		'	if (typeof window !== "undefined") window.__$coverObject = {};\n' +
		'	else if (typeof global !== "undefined") global.__$coverObject = {};\n' +
		'	else throw new Error("cannot find the global scope");\n' +
		'}\n' +
		'__$coverObject[' + quotedName + '] = {};\n' +
		'__$coverObject[' + quotedName + '].__code = ' + quotedCode + ';\n';

	this.tailCode = '';

	// statements that will be instrumented
	this.statements = [];

};

Instrument.prototype = {

	// Short method to instrument the code

	instrument: function(){
		this.parse();
		this.walk();
		return this.generate();
	},

	// generate AST with esprima

	parse: function(){
		return (this.ast = esprima.parse(this.code, {
			range: true,
			loc: true,
			tokens: true
		}));
	},

	// generate new instrumented code from AST

	generate: function(){

		this.statements.sort(function(a, b){
			return a.range[0] - b.range[0];
		});

		var i = 0, l = this.ast.tokens.length;
		var j = 0, m = this.statements.length;

		var increment;
		var code = this.code;
		var rangesInitCode = '';
		var result = '';
		var current = 0;

		// insert
		for (; j < m; j++){

			var statement = this.statements[j];
			var range = statement.range;
			var quotedStatement = JSON.stringify(statement);

			rangesInitCode += '__$coverObject[' + this.quotedName + ']';
			rangesInitCode += '["' + range.join(':') + '"]';
			rangesInitCode += ' = ' + quotedStatement + ';\n';

			for (i = 0; i < l; i++){

				var token = this.ast.tokens[i];

				if (token.range[0] == range[0]){

					// move to the beginning of the line
					var k = token.range[0], char;
					while (k >= 0){
						char = code.slice(k - 1, k);
						if (char == '\n') break;
						if (char != ' ' && char != '\t'){
							k = token.range[0];
							break;
						}
						k--;
					}

					result += code.slice(current, k);
					result += "__$coverObject[" + this.quotedName + "]['" + range.join(':') + "'].count++;\n";

					current = k;

					break;

				}

			}

		}

		result += code.slice(current);

		return this.headCode +
			rangesInitCode +
			result +
			this.tailCode;
	},

	// Walk AST

	walk: function(){
		this._walk(this.ast);
		return this.ast;
	},

	_walk: function(ast, index){

		// iterator variables
		var i, l, k;

		switch (index){
			case 'body':
			case 'consequent':
				if (Array.isArray(ast)){
					for (i = 0, l = ast.length; i < l; i++){
						this.statements.push({
							range: ast[i].range,
							loc: ast[i].loc,
							type: ast[i].type,
							count: 0
						});
					}
				}
				break;
		}

		// recurse through the AST

		if (Array.isArray(ast)){

			for (i = 0, l = ast.length; i < l; i++) this._walk(ast[i], i);

		} else if (typeof ast === 'object'){

			for (k in ast) this._walk(ast[k], k);

		}

	}

};

module.exports = Instrument;
