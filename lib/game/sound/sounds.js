const mpg = require('mpg123');
const player = new mpg.MpgPlayer();

const play = (sound) => {
  // player.play(sound);
};

const stop = () => {
  // player.stop();
};

module.exports = {
  play,
  stop
};
