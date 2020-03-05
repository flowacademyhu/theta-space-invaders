const { UFOPOS } = require('./../constants');

const genUfo = (n = 6, m = 6) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
    for (let j = 0; j < m; j++) {
      arr[i][j] = 'u';
    }
  }
  return arr;
};

// UFOPOS.i = 1;
// UFOPOS.j = 1;
// UFOPOS.dir = 0; // 0 === left , 1 === right

const startUfo = (ufoArr, matrix) => {
  const length = ufoArr.length;
  const ilength = ufoArr[0].length;
  let k = UFOPOS.i;
  let h = UFOPOS.j;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < ilength; j++) {
      matrix[k][h] = 'u';
      h += 2;
    }
    k += 2;
    h = UFOPOS.j;
  }
};

const moveUfoLeft = (ufoArr, matrix) => {
  const length = ufoArr.length;
  const ilength = ufoArr[0].length;
  let k = UFOPOS.i;
  let h = UFOPOS.j;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < ilength; j++) {
      if (matrix[k][h - 1] !== 'i') {
        matrix[k][h - 1] = matrix[k][h];
        matrix[k][h] = '_';
      }
      h += 2;
    }
    k += 2;
    h = UFOPOS.j;
  }
  UFOPOS.j -= 1;
};

const moveUfoRight = (ufoArr, matrix) => {
  const length = ufoArr.length;
  const ilength = ufoArr[0].length;
  let k = UFOPOS.i;
  let h = UFOPOS.j;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < ilength; j++) {
      if (matrix[k][h + 1] !== 'i') {
        matrix[k][h + 1] = matrix[k][h];
        matrix[k][h] = '_';
      }
      h += 2;
    }
    k += 2;
    h = UFOPOS.j;
  }
  UFOPOS.j += 1;
};

const moveUfoDown = (ufoArr, matrix) => {
  const length = ufoArr.length;
  const ilength = ufoArr[0].length;
  let k = UFOPOS.i;
  let h = UFOPOS.j;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < ilength; j++) {
      if (matrix[k + 1][h] !== 'i') {
        matrix[k + 1][h] = matrix[k][h];
        matrix[k][h] = '_';
      }
      h += 2;
    }
    k += 2;
    h = UFOPOS.j;
  }
  UFOPOS.i += 1;
  if (UFOPOS.dir === 0) {
    UFOPOS.dir = 1;
  } else {
    UFOPOS.dir = 0;
  }
};

const moveUfo = (ufoArr, matrix) => {
  if (UFOPOS.dir === 0) {
    if (UFOPOS.j !== 0) {
      moveUfoLeft(ufoArr, matrix);
    } else {
      moveUfoDown(ufoArr, matrix);
    }
  } else {
    if (UFOPOS.j + ((ufoArr[0].length - 1) * 2) !== matrix.length - 1) {
      moveUfoRight(ufoArr, matrix);
    } else {
      if (UFOPOS.i + ((ufoArr.length - 1) * 2) !== matrix.length - 2) {
        moveUfoDown(ufoArr, matrix);
      } else {
        process.exit(0);
      }
    }
  }
};

module.exports = {
  genUfo,
  moveUfo,
  startUfo
};
