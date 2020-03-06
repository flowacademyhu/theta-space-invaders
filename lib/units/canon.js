const stdIn = process.stdin;
const { printBoard } = require('./../board/board');
const { PLAYERCHAR, EMPTYCHAR, PLAYERLIMIT, MAXLIFE } = require('./../constants');
const { bulletObj, putBulletinmatrix } = require('./shoot');

const playerObj = { position: PLAYERLIMIT.left, prevPos: 0, life: MAXLIFE };

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
      movePlayerLeft(playerObj);
      putPlayerInMatrix(matrix);
      printBoard(matrix);
    }
    if (key === 'd') {
      movePlayerRight(playerObj);
      putPlayerInMatrix(matrix);
      printBoard(matrix);
    }
    if (key === '\u0020') {
      if (bulletObj.exists === false) {
        bulletObj.position = playerObj.position;
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
  const playerRow = matrix.length - 1;
  matrix[playerRow][playerObj.position] = PLAYERCHAR;
  matrix[playerRow][playerObj.prevPos] = EMPTYCHAR;
};

module.exports = {
  initPlayer,
  playerControl,
  playerObj
};
