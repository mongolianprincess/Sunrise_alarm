//make a http server
var Promise = require('promise');
var http = require('http');
var utils = require( "utils" );

var PORT = 8080;

var handleRequest = (req, res) =>
  res.end('Ola' + req.url);

var server = http.createServer(handleRequest);

server.listen(PORT, () => {console.log("server listening on http://localhost:", PORT);});

//TO-DO
//use express to enable web interface to control alarm?

//alarm
// if I need to set an alarm, somewhere to store set alarm & length of sunrise setting?
//led
//Sunrise logic (controls max / min of led & colour combination)
//some sort of framework to render alarm control panel?
//how to write in es6? babel-core?
//deploy on heroku?

//how to boot node on raspberry zero?

//hooking up gpio to led
var Gpio = require('onoff').Gpio,
    led = new Gpio(1, 'out'); // locate led on gpio

var ledInterval = setInterval(function(){
	led.writeSync(led.readSync() === 0 ? 1 : 0) // toggle led value to be on and off at an interval, 1 is on and 0 is off
}, 200);


// Stop blinking the LED and turn it off after 5 seconds.
setTimeout(function() {
    clearInterval(ledInterval); // Stop blinking
    led.writeSync(0);  // Turn LED off.
    led.unexport();    // Unexport GPIO and free resources
}, 5000);
