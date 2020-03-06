const { generateBoard, printBoard } = require('./lib/board/board');
const { initPlayer, playerControl } = require('./lib/units/canon');
const { initBunker1, initBunker2, initBunker3 } = require('./lib/units/bunker');
const { REFRESHRATE } = require('./lib/constants');
const { mothershipInit } = require('./lib/units/mothership');
const { genUfo, startUfo, moveUfo, ufoShoot } = require('./lib/units/ufo');

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function main() {
  const map = generateBoard();
  initPlayer(map);
  initBunker1(map);
  initBunker2(map);
  initBunker3(map);
  const ufoArr = genUfo();
  startUfo(ufoArr, map);
  playerControl(map);
  while (true) {
    moveUfo(ufoArr, map);
    ufoShoot(ufoArr, map);
    printBoard(map);
    mothershipInit(map);
    await sleep(REFRESHRATE);
  }
}

main();
