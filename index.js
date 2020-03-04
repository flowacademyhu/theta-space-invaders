const board = require('./lib/board/board');
const canon = require('./lib/units/canon');
const { REFRESHRATE } = require('./lib/constants');

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function main () {
  const map = board.generateBoard();
  canon.initPlayer(map);
  canon.playerControl(map);
  while (true) {
    board.printBoard(map);
    await sleep(REFRESHRATE);
  }
}

main();
