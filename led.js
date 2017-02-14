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
