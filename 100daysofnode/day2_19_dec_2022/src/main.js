var http = require('http');
var uc = require('upper-case');
var hCtrl = require('./homeController');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(uc.upperCase('Hello World! ') + hCtrl.homeController());
}).listen(8080); 