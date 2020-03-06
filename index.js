const { generateBoard, printBoard } = require('./lib/board/board');
const { initPlayer, playerControl } = require('./lib/units/canon');
const { initBunker1, initBunker2, initBunker3 } = require('./lib/units/bunker');
const { REFRESHRATE } = require('./lib/constants');
const { mothershipInit } = require('./lib/units/mothership');
const { genUfo, startUfo, moveUfo, ufoShoot, moveUfoBullet } = require('./lib/units/ufo');
const { putBulletinmatrix } = require('./lib/units/shoot');

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function main() {
  let move = 0;
  const map = generateBoard();
  initPlayer(map);
  initBunker1(map);
  initBunker2(map);
  initBunker3(map);
  const ufoArr = genUfo();
  startUfo(ufoArr, map);
  playerControl(map);
  while (true) {
    if (move === 3) {
      moveUfo(ufoArr, map);
      mothershipInit(map);
      move = 0;
    } else {
      move++;
    }
    moveUfoBullet(map);
    ufoShoot(ufoArr, map);
    printBoard(map);
    putBulletinmatrix(map);
    printBoard(map);
    await sleep(REFRESHRATE);
  }
}

main();
