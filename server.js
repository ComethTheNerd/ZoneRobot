var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./public");

var server = http.createServer(function (req, res) {
    var done = finalhandler(req, res);

    var redirect = /^\/(scripts|styles)/.test(req.url) === false;

    if (redirect) 
    {
        req = Object.assign({}, req, { url : 'index.html' });
    }

    serve(req, res, done);
});

server.listen(8000, () => console.log("Server running at 8000"));