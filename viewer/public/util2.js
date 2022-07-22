var fs = require("fs"), path= require("path"), dir="."

var walk = function (p, callback) {
    var results = [];

    fs.readdir(p, function (err, files){
        if (err) throw err;
        var pending = files.length;
        if (!pending) return callback(null, results);

        files.map( function(file) {
            return path.join(p, file)
        }).filter(function(file) {
            if (fs.statSync(file).isDirectory()) {
                walk(file, function(err, res ) {
                    results.push({ })
                })
            }
        })
    })
}