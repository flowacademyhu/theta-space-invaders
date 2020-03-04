const { generateBoard, printBoard } = require('./lib/board/board');
const { initPlayer, playerControl } = require('./lib/units/canon');
const { REFRESHRATE } = require('./lib/constants');

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function main () {
  const map = generateBoard();
  initPlayer(map);
  playerControl(map);
  while (true) {
    printBoard(map);
    await sleep(REFRESHRATE);
  }
}

main();
