//make a http server
var Promise = require('promise');
var http = require('http');

var PORT = 8080;

var handleRequest = (req, res) =>
  res.end('Ola' + req.url);

var server = http.createServer(handleRequest);

server.listen(PORT, () => {console.log("server listening on http://localhost:", PORT);});


//TO-DO
//use express to enable web interface to control alarm?

//alarm
// if I need to set an alarm, database to store set alarm & length of sunrise setting?
//led
//Sunrise logic (controls max / min of led & colour combination)
//some sort of framework to render alarm control panel?
//how to write in es6? babel-core?

//how to boot node on raspberry zero?
