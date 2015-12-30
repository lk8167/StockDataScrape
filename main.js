var urlreader = require("./urlreader.js");
var pagedownload = require("./requestpages.js");
var pagesave = require("./savepages.js");

var urls = urlreader.getUrls();

if (urls != null && urls.length > 0) {
    for (var i = 0; i < urls.length; i++) {
        var url = urls[i];
        var pagebody = pagedownload.getWebPage(url);
        if (pagebody != null) {
            pagesave.saveWebPage(pagebody,url);
        }
    }
}
else{
    console.log("no url need to be downloaded");
}