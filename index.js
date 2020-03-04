const { generateBoard, printBoard } = require('./lib/board/board');
const { initPlayer, playerControl } = require('./lib/units/canon');
const { initBunker1, initBunker2, initBunker3 } = require('./lib/units/bunker');
const { REFRESHRATE } = require('./lib/constants');

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function main () {
  const map = generateBoard();
  initPlayer(map);
  initBunker1(map);
  initBunker2(map);
  initBunker3(map);
  playerControl(map);
  while (true) {
    printBoard(map);
    await sleep(REFRESHRATE);
  }
}

main();
