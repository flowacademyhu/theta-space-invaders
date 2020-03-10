const { generateBoard, printBoard } = require('./lib/board/board');
const { initPlayer, playerControl } = require('./lib/units/canon');
const { initBunkers } = require('./lib/units/bunker');
const { REFRESHRATE } = require('./lib/constants');
const { mothershipInit } = require('./lib/units/mothership');
const { genUfo, startUfo, moveUfo, ufoShoot, moveUfoBullet } = require('./lib/units/ufo');
const { putBulletinmatrix } = require('./lib/units/shoot');

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function main () {
  let ufoCycle = 0;
  let mothershipCycle = 0;
  const map = generateBoard();
  initPlayer(map);
  initBunkers(map);
  const ufoArr = genUfo();
  startUfo(ufoArr, map);
  playerControl(map);
  while (true) {
    if (ufoCycle === 4) {
      moveUfo(ufoArr, map);
      ufoCycle = 0;
    }
    if (mothershipCycle === 3) {
      mothershipInit(map);
      mothershipCycle = 0;
    }
    moveUfoBullet(map);
    ufoCycle++;
    mothershipCycle++;
    ufoShoot(ufoArr, map);
    putBulletinmatrix(map);
    printBoard(map);
    await sleep(REFRESHRATE);
  }
}

main();
