var fs = require("fs");
var configHelper = require("./configurationhelper.js");

exports.saveWebPage = function(pageBody,url){
    var configuration = configHelper.getConfiguration();
    var webpagefilename = configuration.downloadfolder + "/" + url + ".txt";
    fs.writeFile(webpagefilename,pageBody,function(err){
       if (err) {
           console.log(err);
           return false;
       }
       return true;
    });
}