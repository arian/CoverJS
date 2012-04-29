if (typeof __$coverObject === "undefined"){
	if (typeof window !== "undefined") window.__$coverObject = {};
	else if (typeof global !== "undefined") global.__$coverObject = {};
	else throw new Error("cannot find the global scope");
}
__$coverObject["test/fixture2.js"] = {};
__$coverObject["test/fixture2.js"].__code = "\nvar a;\n\nfor (var i = 200; i--;){\n\tif (i > 150){\n\t\ta = i;\n\t} else {\n\t\ta = 200 - i;\n\t}\n}\n\n";
__$coverObject["test/fixture2.js"]["1:6"] = 0;
__$coverObject["test/fixture2.js"]["9:86"] = 0;
__$coverObject["test/fixture2.js"]["35:84"] = 0;
__$coverObject["test/fixture2.js"]["51:56"] = 0;
__$coverObject["test/fixture2.js"]["70:81"] = 0;
__$coverObject['test/fixture2.js']['1:6']++;
var a;
__$coverObject['test/fixture2.js']['9:86']++;
for (var i = 200; i--;) {
    __$coverObject['test/fixture2.js']['35:84']++;
    if (i > 150) {
        __$coverObject['test/fixture2.js']['51:56']++;
        a = i;
    } else {
        __$coverObject['test/fixture2.js']['70:81']++;
        a = 200 - i;
    }
}