const generateMatrix = (heigth, width) => {
  const arr = new Array(heigth);
  for (let i = 0; i < heigth; i++) {
    arr[i] = new Array(width);
  }

  return arr;
};

const printBoard = (arr) => {
  const length = arr.length;
  console.clear();
  for (let i = 0; i < length; i++) {
    console.log(arr[i].join(' ').toString());
  }
};

const fillMatrix = (source) => {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      source[i][j] = '_';
    }
  }
};

const generateBoard = (heigth, width) => {
  const arr = generateMatrix(heigth, width);
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
