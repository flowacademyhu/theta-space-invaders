const stdIn = process.stdin;
const { printBoard } = require('./../board/board');
const { PLAYERCHAR, EMPTYCHAR, PLAYERLIMIT, PLAYER } = require('./../constants');
const { bulletObj, putBulletinmatrix } = require('./shoot');

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
      movePlayerLeft(PLAYER);
      putPlayerInMatrix(matrix);
      printBoard(matrix);
    }
    if (key === 'd') {
      movePlayerRight(PLAYER);
      putPlayerInMatrix(matrix);
      printBoard(matrix);
    }
    if (key === '\u0020') {
      if (bulletObj.exists === false) {
        bulletObj.position = PLAYER.position;
        bulletObj.exists = true;
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

module.exports = {
  initPlayer,
  playerControl
};
