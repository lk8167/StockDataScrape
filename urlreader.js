var fs = require("fs");
var urlfilename = "urls.json";

exports.getUrls = function()
{
    var urls = JSON.parse(fs.readFileSync(urlfilename));
    return urls;
}