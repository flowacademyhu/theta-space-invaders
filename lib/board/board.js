const { BOARDHEIGHT, BOARDWIDTH, EMPTYCHAR } = require('./../constants');

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
};

const fillMatrix = (source) => {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      source[i][j] = EMPTYCHAR;
    }
  }
};

const generateBoard = () => {
  const arr = generateMatrix();
  fillMatrix(arr);
  return arr;
};

const printBoardMenu = (arr) => {
  const length = arr.length;
  console.clear();
  for (let i = 0; i < length; i++) {
    console.log(arr[i].join('').toString());
  }
};

module.exports = {
  generateBoard,
  printBoard,
  generateMatrix,
  printBoardMenu
};
