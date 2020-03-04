const { generateBoard, printBoard } = require('./lib/board/board');
const { initPlayer, playerControl } = require('./lib/units/canon');
const { REFRESHRATE } = require('./lib/constants');
const { mothershipInit } = require('./lib/units/mothership');

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function main () {
  const map = generateBoard();
  initPlayer(map);
  playerControl(map);
  while (true) {
    printBoard(map);
    mothershipInit(map);
    await sleep(REFRESHRATE);
  }
}

main();
