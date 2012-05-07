if (typeof __$coverObject === "undefined"){
	if (typeof window !== "undefined") window.__$coverObject = {};
	else if (typeof global !== "undefined") global.__$coverObject = {};
	else throw new Error("cannot find the global scope");
}
__$coverObject["test/fixture.js"] = {};
__$coverObject["test/fixture.js"].__code = "\"use strict\";\n\nvar a = 1;\nvar b = 3;\n\nvar esprima = require('esprima');\nvar escodegen = require('escodegen');\n\nfunction c(a, b){\n\treturn a + b;\n}\n\nif (b){\n\ta++;\n} else {\n\tb--;\n}\n\nvar d = function(){\n\tconsole.warn('bar');\n};\n\nswitch (a){\n\tcase 1:\n\t\tc(a, b);\n\t\tc(a, c(a, b));\n\t\tbreak;\n\tcase 2: c(b, a); break;\n}\n\nc(3, 4);\nc(5, 2);\n\nfunction Cover(){\n\n}\n\nCover.prototype = {\n\n\tparse: function(){\n\t\treturn (this.ast = esprima.parse(this.code, {\n\t\t\trange: true\n\t\t}));\n\t},\n\n\tgenerate: function(ast){\n\t\treturn escodegen.generate(ast);\n\t},\n\n\twalk: function(ast, index, parent){\n\t\tconsole.warn('foo bar');\n\t\tconsole.warn('yello');\n\t}\n\n};\n\ntry {\n\tthrow new Error('whops');\n\n\tconsole.warn('not here!');\n\n} catch (e){\n\tconsole.warn(e);\n\tconsole.warn(e);\n} finally {\n\tconsole.warn('finally'); console.warn('more finally');\n}\n\n\n";
__$coverObject["test/fixture.js"]["0:12"] = {"range":[0,12],"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":13}},"type":"ExpressionStatement","count":0};
__$coverObject["test/fixture.js"]["15:24"] = {"range":[15,24],"loc":{"start":{"line":3,"column":0},"end":{"line":3,"column":10}},"type":"VariableDeclaration","count":0};
__$coverObject["test/fixture.js"]["26:35"] = {"range":[26,35],"loc":{"start":{"line":4,"column":0},"end":{"line":4,"column":10}},"type":"VariableDeclaration","count":0};
__$coverObject["test/fixture.js"]["38:70"] = {"range":[38,70],"loc":{"start":{"line":6,"column":0},"end":{"line":6,"column":33}},"type":"VariableDeclaration","count":0};
__$coverObject["test/fixture.js"]["72:108"] = {"range":[72,108],"loc":{"start":{"line":7,"column":0},"end":{"line":7,"column":37}},"type":"VariableDeclaration","count":0};
__$coverObject["test/fixture.js"]["111:144"] = {"range":[111,144],"loc":{"start":{"line":9,"column":0},"end":{"line":11,"column":1}},"type":"FunctionDeclaration","count":0};
__$coverObject["test/fixture.js"]["130:142"] = {"range":[130,142],"loc":{"start":{"line":10,"column":1},"end":{"line":10,"column":14}},"type":"ReturnStatement","count":0};
__$coverObject["test/fixture.js"]["147:176"] = {"range":[147,176],"loc":{"start":{"line":13,"column":0},"end":{"line":17,"column":1}},"type":"IfStatement","count":0};
__$coverObject["test/fixture.js"]["156:159"] = {"range":[156,159],"loc":{"start":{"line":14,"column":1},"end":{"line":14,"column":5}},"type":"ExpressionStatement","count":0};
__$coverObject["test/fixture.js"]["171:174"] = {"range":[171,174],"loc":{"start":{"line":16,"column":1},"end":{"line":16,"column":5}},"type":"ExpressionStatement","count":0};
__$coverObject["test/fixture.js"]["179:222"] = {"range":[179,222],"loc":{"start":{"line":19,"column":0},"end":{"line":21,"column":2}},"type":"VariableDeclaration","count":0};
__$coverObject["test/fixture.js"]["200:219"] = {"range":[200,219],"loc":{"start":{"line":20,"column":1},"end":{"line":20,"column":21}},"type":"ExpressionStatement","count":0};
__$coverObject["test/fixture.js"]["225:308"] = {"range":[225,308],"loc":{"start":{"line":23,"column":0},"end":{"line":29,"column":1}},"type":"SwitchStatement","count":0};
__$coverObject["test/fixture.js"]["248:255"] = {"range":[248,255],"loc":{"start":{"line":25,"column":2},"end":{"line":25,"column":10}},"type":"ExpressionStatement","count":0};
__$coverObject["test/fixture.js"]["259:272"] = {"range":[259,272],"loc":{"start":{"line":26,"column":2},"end":{"line":26,"column":16}},"type":"ExpressionStatement","count":0};
__$coverObject["test/fixture.js"]["276:281"] = {"range":[276,281],"loc":{"start":{"line":27,"column":2},"end":{"line":27,"column":8}},"type":"BreakStatement","count":0};
__$coverObject["test/fixture.js"]["292:299"] = {"range":[292,299],"loc":{"start":{"line":28,"column":9},"end":{"line":28,"column":17}},"type":"ExpressionStatement","count":0};
__$coverObject["test/fixture.js"]["301:306"] = {"range":[301,306],"loc":{"start":{"line":28,"column":18},"end":{"line":28,"column":24}},"type":"BreakStatement","count":0};
__$coverObject["test/fixture.js"]["311:318"] = {"range":[311,318],"loc":{"start":{"line":31,"column":0},"end":{"line":31,"column":8}},"type":"ExpressionStatement","count":0};
__$coverObject["test/fixture.js"]["320:327"] = {"range":[320,327],"loc":{"start":{"line":32,"column":0},"end":{"line":32,"column":8}},"type":"ExpressionStatement","count":0};
__$coverObject["test/fixture.js"]["330:349"] = {"range":[330,349],"loc":{"start":{"line":34,"column":0},"end":{"line":36,"column":1}},"type":"FunctionDeclaration","count":0};
__$coverObject["test/fixture.js"]["352:627"] = {"range":[352,627],"loc":{"start":{"line":38,"column":0},"end":{"line":55,"column":2}},"type":"ExpressionStatement","count":0};
__$coverObject["test/fixture.js"]["395:461"] = {"range":[395,461],"loc":{"start":{"line":41,"column":2},"end":{"line":43,"column":6}},"type":"ReturnStatement","count":0};
__$coverObject["test/fixture.js"]["496:526"] = {"range":[496,526],"loc":{"start":{"line":47,"column":2},"end":{"line":47,"column":33}},"type":"ReturnStatement","count":0};
__$coverObject["test/fixture.js"]["572:595"] = {"range":[572,595],"loc":{"start":{"line":51,"column":2},"end":{"line":51,"column":26}},"type":"ExpressionStatement","count":0};
__$coverObject["test/fixture.js"]["599:620"] = {"range":[599,620],"loc":{"start":{"line":52,"column":2},"end":{"line":52,"column":24}},"type":"ExpressionStatement","count":0};
__$coverObject["test/fixture.js"]["630:810"] = {"range":[630,810],"loc":{"start":{"line":57,"column":0},"end":{"line":67,"column":1}},"type":"TryStatement","count":0};
__$coverObject["test/fixture.js"]["637:661"] = {"range":[637,661],"loc":{"start":{"line":58,"column":1},"end":{"line":58,"column":26}},"type":"ThrowStatement","count":0};
__$coverObject["test/fixture.js"]["665:690"] = {"range":[665,690],"loc":{"start":{"line":60,"column":1},"end":{"line":60,"column":27}},"type":"ExpressionStatement","count":0};
__$coverObject["test/fixture.js"]["707:722"] = {"range":[707,722],"loc":{"start":{"line":63,"column":1},"end":{"line":63,"column":17}},"type":"ExpressionStatement","count":0};
__$coverObject["test/fixture.js"]["725:740"] = {"range":[725,740],"loc":{"start":{"line":64,"column":1},"end":{"line":64,"column":17}},"type":"ExpressionStatement","count":0};
__$coverObject["test/fixture.js"]["755:778"] = {"range":[755,778],"loc":{"start":{"line":66,"column":1},"end":{"line":66,"column":25}},"type":"ExpressionStatement","count":0};
__$coverObject["test/fixture.js"]["780:808"] = {"range":[780,808],"loc":{"start":{"line":66,"column":26},"end":{"line":66,"column":55}},"type":"ExpressionStatement","count":0};
__$coverObject["test/fixture.js"]['0:12'].count++;
"use strict";

__$coverObject["test/fixture.js"]['15:24'].count++;
var a = 1;
__$coverObject["test/fixture.js"]['26:35'].count++;
var b = 3;

__$coverObject["test/fixture.js"]['38:70'].count++;
var esprima = require('esprima');
__$coverObject["test/fixture.js"]['72:108'].count++;
var escodegen = require('escodegen');

__$coverObject["test/fixture.js"]['111:144'].count++;
function c(a, b){
__$coverObject["test/fixture.js"]['130:142'].count++;
	return a + b;
}

__$coverObject["test/fixture.js"]['147:176'].count++;
if (b){
__$coverObject["test/fixture.js"]['156:159'].count++;
	a++;
} else {
__$coverObject["test/fixture.js"]['171:174'].count++;
	b--;
}

__$coverObject["test/fixture.js"]['179:222'].count++;
var d = function(){
__$coverObject["test/fixture.js"]['200:219'].count++;
	console.warn('bar');
};

__$coverObject["test/fixture.js"]['225:308'].count++;
switch (a){
	case 1:
__$coverObject["test/fixture.js"]['248:255'].count++;
		c(a, b);
__$coverObject["test/fixture.js"]['259:272'].count++;
		c(a, c(a, b));
__$coverObject["test/fixture.js"]['276:281'].count++;
		break;
	case 2: __$coverObject["test/fixture.js"]['292:299'].count++;
c(b, a); __$coverObject["test/fixture.js"]['301:306'].count++;
break;
}

__$coverObject["test/fixture.js"]['311:318'].count++;
c(3, 4);
__$coverObject["test/fixture.js"]['320:327'].count++;
c(5, 2);

__$coverObject["test/fixture.js"]['330:349'].count++;
function Cover(){

}

__$coverObject["test/fixture.js"]['352:627'].count++;
Cover.prototype = {

	parse: function(){
__$coverObject["test/fixture.js"]['395:461'].count++;
		return (this.ast = esprima.parse(this.code, {
			range: true
		}));
	},

	generate: function(ast){
__$coverObject["test/fixture.js"]['496:526'].count++;
		return escodegen.generate(ast);
	},

	walk: function(ast, index, parent){
__$coverObject["test/fixture.js"]['572:595'].count++;
		console.warn('foo bar');
__$coverObject["test/fixture.js"]['599:620'].count++;
		console.warn('yello');
	}

};

__$coverObject["test/fixture.js"]['630:810'].count++;
try {
__$coverObject["test/fixture.js"]['637:661'].count++;
	throw new Error('whops');

__$coverObject["test/fixture.js"]['665:690'].count++;
	console.warn('not here!');

} catch (e){
__$coverObject["test/fixture.js"]['707:722'].count++;
	console.warn(e);
__$coverObject["test/fixture.js"]['725:740'].count++;
	console.warn(e);
} finally {
__$coverObject["test/fixture.js"]['755:778'].count++;
	console.warn('finally'); __$coverObject["test/fixture.js"]['780:808'].count++;
console.warn('more finally');
}



