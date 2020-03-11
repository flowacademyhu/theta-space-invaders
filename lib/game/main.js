const { generateBoard, printBoard } = require('./board/board');
const { initPlayer, playerControl } = require('./units/canon');
const { initBunkers } = require('./units/bunker');
const { REFRESHRATE, MOTHERSHIPSPEED, UFOPOS, PLAYER, gameState, resetObj } = require('./constants');
const { mothershipInit } = require('./units/mothership');
const { genUfo, startUfo, moveUfo, ufoShoot, moveUfoBullet } = require('./units/ufo');
const { putBulletinmatrix } = require('./units/shoot');
const { pushNewScoreToTable } = require('./../hscore/scores');

const gameOver = () => {
  process.stdin.removeAllListeners('data');
  console.clear();
  console.log('GAME OVER!');
  console.log(`You earned ${PLAYER.points} points.`);
  // console.log('Press SPACE to return to menu');
  console.log('Enter your name!');
  process.stdin.on('data', (chunk) => {
    let name = chunk.toString().trim();
    pushNewScoreToTable(name, PLAYER.points);
    if (name.length > 0) process.exit();
  });
};

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function main() {
  resetObj();
  process.stdin.removeAllListeners('data');
  gameState.run = true;
  let ufoCycle = 0;
  let mothershipCycle = 0;
  const map = generateBoard();
  initPlayer(map);
  initBunkers(map);
  const ufoArr = genUfo();
  startUfo(ufoArr, map);
  playerControl(map);
  while (gameState.run === true) {
    if (ufoCycle === UFOPOS.speed) {
      moveUfo(ufoArr, map);
      ufoCycle = 0;
    }
    if (mothershipCycle === MOTHERSHIPSPEED) {
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
  await gameOver();
}

module.exports = {
  main
};
