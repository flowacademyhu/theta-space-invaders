const stdIn = process.stdin;
const { printBoard, putLifeOnBoard } = require('./../board/board');
const { PLAYERCHAR, EMPTYCHAR, PLAYERLIMIT, PLAYER, gameState, canonStep, canonShot, playerDeath } = require('./../constants');
const { bulletObj, putBulletinmatrix } = require('./shoot');
const mpg = require('mpg123');
const player = new mpg.MpgPlayer();

const initPlayer = (matrix) => {
  putPlayerInMatrix(matrix);
};

const playerControl = (matrix) => {
  stdIn.setRawMode(true);
  stdIn.resume();
  stdIn.setEncoding('utf8');
  stdIn.on('data', (key) => {
    if (key === 'q') process.exit(0);
    if (key === 'a') {
      player.play(canonStep);
      movePlayerLeft(PLAYER);
      putPlayerInMatrix(matrix);
      printBoard(matrix);
    }
    if (key === 'd') {
      player.play(canonStep);
      movePlayerRight(PLAYER);
      putPlayerInMatrix(matrix);
      printBoard(matrix);
    }
    if (key === '\u0020') {
      if (bulletObj.exists === false && gameState.run === true) {
        bulletObj.position = PLAYER.position;
        bulletObj.exists = true;
        player.play(canonShot);
        putBulletinmatrix(matrix);
        printBoard(matrix);
      }
    }
  });
};

const movePlayerLeft = (player) => {
  if (player.position > PLAYERLIMIT.left) {
    player.prevPos = player.position;
    player.position--;
  }
};

const movePlayerRight = (player) => {
  if (player.position < PLAYERLIMIT.right) {
    player.prevPos = player.position;
    player.position++;
  }
};

const putPlayerInMatrix = (matrix) => {
  const playerRow = matrix.length - 2;
  matrix[playerRow][PLAYER.position] = PLAYERCHAR;
  for (let i = -2; i < 3; i++) {
    matrix[playerRow + 1][PLAYER.position + i] = EMPTYCHAR;
  }
  matrix[playerRow][PLAYER.prevPos] = EMPTYCHAR;
  for (let i = -1; i < 2; i++) {
    matrix[playerRow + 1][PLAYER.position + i] = PLAYERCHAR;
  }
};

const playerGotHit = (matrix) => {
  if (PLAYER.life > 1) {
    player.play(playerDeath);
    resetPlayer(matrix);
    putLifeOnBoard(matrix);
  } else {
    gameOver(matrix);
  }
};

const resetPlayer = (matrix) => {
  const playerRow = matrix.length - 2;
  for (let i = PLAYERLIMIT.left; i < PLAYERLIMIT.right + 2; i++) {
    matrix[playerRow][i] = EMPTYCHAR;
    matrix[playerRow + 1][i] = EMPTYCHAR;
  }
  PLAYER.life--;
  PLAYER.position = PLAYERLIMIT.left;
  putPlayerInMatrix(matrix);
};

const gameOver = (matrix) => {
  console.clear();
  console.log('GAME OVER!');
  console.log(`You earned ${PLAYER.points} points.`);
  console.log('Press SPACE to return to menu');
};

module.exports = {
  initPlayer,
  playerControl,
  playerGotHit
};
