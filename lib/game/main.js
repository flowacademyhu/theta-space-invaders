const { generateBoard, printBoard } = require('./board/board');
const { initPlayer, playerControl } = require('./units/canon');
const { initBunkers } = require('./units/bunker');
const { REFRESHRATE, MOTHERSHIPSPEED, UFOPOS, PLAYER, gameState, resetObj } = require('./constants');
const { mothershipInit } = require('./units/mothership');
const { genUfo, startUfo, moveUfo, ufoShoot, moveUfoBullet } = require('./units/ufo');
const { putBulletinmatrix } = require('./units/shoot');
const { pushNewScoreToTable } = require('./../hscore/scores');
const readline = require('readline-sync');

const gameOver = async () => {
  process.stdin.removeAllListeners('data');
  console.clear();
  if (gameState.over === 'lose') {
    console.log('GAME OVER!');
  } else if (gameState.over === 'win') {
    console.log('YOU WON!');
  }
  await sleep(1500);
  console.log(`You earned ${PLAYER.points} points.`);
  const name = readline.question('Enter your name!\n', { hideEchoBack: false });
  if (readline.keyInYN(`Hi ${name} do you want to save your score? (Y/N)`)) {
    pushNewScoreToTable(name, PLAYER.points);
  } else {
    console.log('OK!');
  }
};

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const main = async () => {
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
  gameOver();
};

module.exports = {
  main
};
