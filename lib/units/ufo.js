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

let ufoPosi = 1;
let ufoPosj = 1;
let dir = 0; // 0 === left , 1 === right
const startUfo = (ufoArr, matrix) => {
  const length = ufoArr.length;
  const ilength = ufoArr[0].length;
  let k = ufoPosi;
  let h = ufoPosj;
  for (let i = 0; i < length; i++) {

    for (let j = 0; j < ilength; j++) {

      matrix[k][h] = 'u';
      h += 2;
    }
    k += 2;
    h = ufoPosj;
  }
};

const moveUfoLeft = (ufoArr, matrix) => {
  const length = ufoArr.length;
  const ilength = ufoArr[0].length;
  let k = ufoPosi;
  let h = ufoPosj;
  let copy = ' ';
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < ilength; j++) {
      if (matrix[k][h - 1] !== 'i') {
        copy = matrix[k][h];
        matrix[k][h] = matrix[k][h - 1];
        matrix[k][h - 1] = copy;
      }
      h += 2;
    }
    k += 2;
    h = ufoPosj;
  }
  ufoPosj -= 1;
};

const moveUfoRight = (ufoArr, matrix) => {
  const length = ufoArr.length;
  const ilength = ufoArr[0].length;
  let k = ufoPosi;
  let h = ufoPosj;
  let copy = ' ';
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < ilength; j++) {
      if (matrix[k][h + 1] !== 'i') {
        copy = matrix[k][h];
        matrix[k][h] = matrix[k][h + 1];
        matrix[k][h + 1] = copy;
      }
      h += 2;
    }
    k += 2;
    h = ufoPosj;
  }
  ufoPosj += 1;
};

const moveUfoDown = (ufoArr, matrix) => {
  const length = ufoArr.length;
  const ilength = ufoArr[0].length;
  let k = ufoPosi;
  let h = ufoPosj;
  let copy = ' ';
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < ilength; j++) {
      if (matrix[k + 1][h] !== 'i') {
        copy = matrix[k][h];
        matrix[k][h] = matrix[k + 1][h];
        matrix[k + 1][h] = copy;
      }
      h += 2;
    }
    k += 2;
    h = ufoPosj;
  }
  ufoPosi += 1;
  if (dir === 0) {
    dir = 1;
  } else {
    dir = 0;
  }
};

const moveUfo = (ufoArr, matrix) => {
  if (dir === 0) {
    if (ufoPosj !== 0) {
      moveUfoLeft(ufoArr, matrix);
    } else {
      moveUfoDown(ufoArr, matrix);
    }
  } else {
    if (ufoPosj + 10 !== matrix.length - 1) {
      moveUfoRight(ufoArr, matrix);
    } else {
      moveUfoDown(ufoArr, matrix);
    }
  }
};

module.exports = {
  genUfo,
  moveUfo,
  startUfo
};
