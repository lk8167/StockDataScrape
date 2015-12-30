var request = require("request");

exports.getWebPage = function(url){
    request(url,function(err,response,body){
       if (err) {
           console.log(err);
           return null;
       }
       return body;
    });
}