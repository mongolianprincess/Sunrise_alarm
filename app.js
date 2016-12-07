var Promise = require('promise');
var http = require('http');
var utils = require( "utils" );

var PORT = 8080;

var handleRequest = (req, res) =>
  res.end('Hello world' + req.url);

var server = http.createServer(handleRequest);

server.listen(PORT, () => {console.log("server listening on http://localhost:%s", PORT);});
