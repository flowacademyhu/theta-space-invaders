const stdIn = process.stdin;
const { printBoard } = require('./../board/board');
const { PLAYERCHAR, EMPTYCHAR, PLAYERLIMIT, PLAYER } = require('./../constants');
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
      player.play('/home/steelriot/flow/spaceinvaders/lib/sound/step.mp3');
      movePlayerLeft(PLAYER);
      putPlayerInMatrix(matrix);
      printBoard(matrix);
    }
    if (key === 'd') {
      player.play('/home/steelriot/flow/spaceinvaders/lib/sound/step.mp3')
      movePlayerRight(PLAYER);
      putPlayerInMatrix(matrix);
      printBoard(matrix);
    }
    if (key === '\u0020') {
      if (bulletObj.exists === false) {
        bulletObj.position = PLAYER.position;
        bulletObj.exists = true;
        player.play('/home/steelriot/flow/spaceinvaders/lib/sound/shoot.mp3')
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
  const playerRow = matrix.length - 1;
  matrix[playerRow][PLAYER.position] = PLAYERCHAR;
  matrix[playerRow][PLAYER.prevPos] = EMPTYCHAR;
};

module.exports = {
  initPlayer,
  playerControl
};
