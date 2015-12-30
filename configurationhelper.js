var fs = require("fs");
var configurationfilename = "configuration.json";

exports.getConfiguration = function(){
    var configuration = JSON.parse(fs.readFileSync(configurationfilename));
    return configuration;
}
