;(function(fs, call){
    __$coverCall = function(name, range){
        var json = fs.readFileSync("{result}");
        __$coverObject = JSON.parse(json);
        call(name, range);
        fs.writeFileSync("{result}", JSON.stringify(__$coverObject, null, 2));
    };
    fs.writeFileSync("{result}", JSON.stringify(__$coverObject, null, 2));
})(require('fs'), __$coverCall);
