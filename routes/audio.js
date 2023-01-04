const path = require('path');
const player = require('play-sound')((opts = {}));

module.exports = function (req, res) {
  if (req.body.hasOwnProperty('filename')) {
    const filename = req.body.filename;
    player.play(path.join('audio', filename), function (error) {
      if (error) throw error;
    });

    res.contentType('json');
    res.send({
      filename,
    });
  }
};
