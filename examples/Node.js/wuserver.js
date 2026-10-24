// Weather update server in node.js
// Binds PUB socket to tcp://*:5556
// Publishes random weather updates

var zmq = require('zeromq')
  , crypto = require('node:crypto')
  , publisher = zmq.socket('pub');

publisher.bindSync("tcp://*:5556");
publisher.bindSync("ipc://weather.ipc");

function zeropad(num) {
  return num.toString().padStart(5, "0");
};

function rand(upper, extra) {
  var num = crypto.randomInt(upper + 1);
  return num + (extra || 0);
};

var keepRunning = true;
process.on('SIGINT', function () {
  keepRunning = false;
});

while (keepRunning) {
  // Get values that will fool the boss
  var zipcode     = rand(100000)
    , temperature = rand(215, -80)
    , relhumidity = rand(50, 10)
    , update      = `${zeropad(zipcode)} ${temperature} ${relhumidity}`;
  publisher.send(update);
}
