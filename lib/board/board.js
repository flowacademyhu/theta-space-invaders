const generateMatrix = (heigth, width) => {
  const arr = new Array(heigth);
  for (let i = 0; i < heigth; i++) {
    arr[i] = new Array(width);
  }

  return arr;
};

const printBoard = (arr) => {
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr[i].length; j++) {
  //     process.stdout.write(arr[i][j]);
  //   }
  //   console.log();
  // }
  const length = arr.length;
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

module.exports = {
  generateBoard,
  printBoard
};
