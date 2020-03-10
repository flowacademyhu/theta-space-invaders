const { BOARDHEIGHT, BOARDWIDTH, EMPTYCHAR, PLAYERLIMIT, PLAYER } = require('../constants');

const generateMatrix = () => {
  const arr = new Array(BOARDHEIGHT);
  for (let i = 0; i < BOARDHEIGHT; i++) {
    arr[i] = new Array(BOARDWIDTH);
  }

  return arr;
};

const printBoard = (arr) => {
  const length = arr.length;
  console.clear();
  process.stdout.write('[]');
  for (let i = 2; i < length + 2; i++) {
    process.stdout.write('[ ]');
  }
  process.stdout.write('[]');
  console.log();
  for (let i = 0; i < length; i++) {
    console.log('[] ' + arr[i].join(' ').toString() + '[]');
  }
  process.stdout.write('[]');
  for (let i = 2; i < length + 2; i++) {
    process.stdout.write('[ ]');
  }
  process.stdout.write('[]');
  console.log();
};

const fillMatrix = (source) => {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      source[i][j] = EMPTYCHAR;
    }
  }
  source[BOARDHEIGHT - 1][PLAYERLIMIT.left - 3] = 'Ж';
  source[BOARDHEIGHT - 1][PLAYERLIMIT.right + 3] = 'Ж';
  putLifeOnBoard(source);
};

const generateBoard = () => {
  const arr = generateMatrix();
  fillMatrix(arr);
  return arr;
};

const putLifeOnBoard = (matrix) => {
  for (let i = 0; i < PLAYERLIMIT.left - 6; i++) matrix[BOARDHEIGHT - 1][i] = EMPTYCHAR;
  for (let i = 0; i < PLAYER.life; i++) {
    matrix[BOARDHEIGHT - 1][(PLAYERLIMIT.left - 6) - i] = '❤';
  }
};

module.exports = {
  generateBoard,
  printBoard,
  generateMatrix,
  putLifeOnBoard
};
