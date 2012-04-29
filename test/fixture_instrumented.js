if (typeof __$coverObject === "undefined"){
	if (typeof window !== "undefined") window.__$coverObject = {};
	else if (typeof global !== "undefined") global.__$coverObject = {};
	else throw new Error("cannot find the global scope");
}
function __$cover(start, end){
	__$coverObject["0"][start + ":" + end] = (__$coverObject["0"][start + ":" + end] || 0) + 1;
}
__$coverObject["0"] = {};
__$coverObject["0"].__code = "\"use strict\";\n\nvar a = 1;\nvar b = 3;\n\nvar esprima = require('esprima');\nvar escodegen = require('escodegen');\n\nfunction c(a, b){\n\treturn a + b;\n}\n\nif (b){\n\ta++;\n} else {\n\tb--;\n}\n\nvar d = function(){\n\tconsole.log('bar');\n};\n\nswitch (a){\n\tcase 1:\n\t\tc(a, b);\n\t\tc(a, c(a, b));\n\t\tbreak;\n\tcase 2: c(b, a); break;\n}\n\nc(3, 4);\nc(5, 2);\n\nfunction Cover(){\n\n}\n\nCover.prototype = {\n\n\tparse: function(){\n\t\treturn (this.ast = esprima.parse(this.code, {\n\t\t\trange: true\n\t\t}));\n\t},\n\n\tgenerate: function(ast){\n\t\treturn escodegen.generate(ast);\n\t},\n\n\twalk: function(ast, index, parent){\n\t\tconsole.log('foo bar');\n\t\tconsole.log('yello');\n\t}\n\n};\n\ntry {\n\tthrow new Error('whops');\n} catch (e){\n\tconsole.log(e);\n\tconsole.log(e);\n} finally {\n\tconsole.log('finally');\n\tconsole.log('more finally');\n}\n\n\n";
__$coverObject["0"]["0:12"] = 0;
__$coverObject["0"]["15:24"] = 0;
__$coverObject["0"]["26:35"] = 0;
__$coverObject["0"]["38:70"] = 0;
__$coverObject["0"]["72:108"] = 0;
__$coverObject["0"]["111:144"] = 0;
__$coverObject["0"]["147:176"] = 0;
__$coverObject["0"]["179:221"] = 0;
__$coverObject["0"]["224:307"] = 0;
__$coverObject["0"]["310:317"] = 0;
__$coverObject["0"]["319:326"] = 0;
__$coverObject["0"]["329:348"] = 0;
__$coverObject["0"]["351:624"] = 0;
__$coverObject["0"]["627:774"] = 0;
__$coverObject["0"]["130:142"] = 0;
__$coverObject["0"]["156:159"] = 0;
__$coverObject["0"]["171:174"] = 0;
__$coverObject["0"]["200:218"] = 0;
__$coverObject["0"]["247:254"] = 0;
__$coverObject["0"]["258:271"] = 0;
__$coverObject["0"]["275:280"] = 0;
__$coverObject["0"]["291:298"] = 0;
__$coverObject["0"]["300:305"] = 0;
__$coverObject["0"]["394:460"] = 0;
__$coverObject["0"]["495:525"] = 0;
__$coverObject["0"]["571:593"] = 0;
__$coverObject["0"]["597:617"] = 0;
__$coverObject["0"]["634:658"] = 0;
__$coverObject["0"]["674:688"] = 0;
__$coverObject["0"]["691:705"] = 0;
__$coverObject["0"]["720:742"] = 0;
__$coverObject["0"]["745:772"] = 0;
__$cover(0, 12);
'use strict';
__$cover(15, 24);
var a = 1;
__$cover(26, 35);
var b = 3;
__$cover(38, 70);
var esprima = require('esprima');
__$cover(72, 108);
var escodegen = require('escodegen');
__$cover(111, 144);
function c(a, b) {
    __$cover(130, 142);
    return a + b;
}
__$cover(147, 176);
if (b) {
    __$cover(156, 159);
    a++;
} else {
    __$cover(171, 174);
    b--;
}
__$cover(179, 221);
var d = function () {
    __$cover(200, 218);
    console.log('bar');
};
__$cover(224, 307);
switch (a) {
case 1:
    __$cover(247, 254);
    c(a, b);
    __$cover(258, 271);
    c(a, c(a, b));
    __$cover(275, 280);
    break;
case 2:
    __$cover(291, 298);
    c(b, a);
    __$cover(300, 305);
    break;
}
__$cover(310, 317);
c(3, 4);
__$cover(319, 326);
c(5, 2);
__$cover(329, 348);
function Cover() {
}
__$cover(351, 624);
Cover.prototype = {
    parse: function () {
        __$cover(394, 460);
        return this.ast = esprima.parse(this.code, {
            range: true
        });
    },
    generate: function (ast) {
        __$cover(495, 525);
        return escodegen.generate(ast);
    },
    walk: function (ast, index, parent) {
        __$cover(571, 593);
        console.log('foo bar');
        __$cover(597, 617);
        console.log('yello');
    }
};
__$cover(627, 774);
try {
    __$cover(634, 658);
    throw new Error('whops');
} catch (e) {
    __$cover(674, 688);
    console.log(e);
    __$cover(691, 705);
    console.log(e);
} finally {
    __$cover(720, 742);
    console.log('finally');
    __$cover(745, 772);
    console.log('more finally');
}
console.log(__$coverObject);

