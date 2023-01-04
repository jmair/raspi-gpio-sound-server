const rpio = require('rpio');
const pins = require('../pins');

rpio.init({ mapping: 'physical' });
pins.forEach((pin) => {
  rpio.open(pin, rpio.OUTPUT, rpio.HIGH);
});

module.exports = function (req, res) {
  console.log('body:', req.body);

  if (req.body.hasOwnProperty('action')) {
    const status = req.body.status ? rpio.LOW : rpio.HIGH;
    const gpio = req.body.gpio;

    rpio.open(gpio, rpio.OUTPUT, status);
    rpio.write(gpio, status);
    res.contentType('json');
    res.send({
      gpio,
      status,
    });
  }
};
