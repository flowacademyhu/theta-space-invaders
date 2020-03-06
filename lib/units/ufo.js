const { UFOPOS } = require('./../constants');
const { MOTHERSHIPCHAR, EMPTYCHAR, BOARDHEIGHT, BOARDWIDTH, MOTHERSHIPCYCLE } = require('./../constants');

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

//

const ufo1 = {};
const ufo2 = {};

//

const randomNum = (max = 5, min = 0) => {
  return Math.floor(Math.random() * ((max + 1) - min));
};

const ufoShoot = (ufoArr, matrix) => {
  if (UFOPOS.shot < 2) {
    const x = randomNum();
    const y = randomNum(10);
    if (y > 7) {
      for (let i = (UFOPOS.i + ((ufoArr.length - 1) * 2)); i >= UFOPOS.i; i--) {
        if (matrix[i][UFOPOS.j + (x * 2)] === 'u') {
          // matrix[i - 1][UFOPOS.j + (x * 2)] = 'I';
          UFOPOS.shit++;
          return;
        }
      }
    }
  }
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
      if (matrix[k][h] === 'u') {
        if (matrix[k][h - 1] !== 'i') {
          matrix[k][h - 1] = matrix[k][h];
          matrix[k][h] = '_';
        }
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
      if (matrix[k][h] === 'u') {
        if (matrix[k][h + 1] !== 'i') {
          matrix[k][h + 1] = matrix[k][h];
          matrix[k][h] = '_';
        }
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
      if (matrix[k][h] === 'u') {
        if (matrix[k + 1][h] !== 'i') {
          matrix[k + 1][h] = matrix[k][h];
          matrix[k][h] = '_';
        }
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
  let stop = 0;

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
  for (let i = 0; i <= UFOPOS.j + ((ufoArr[0].length - 1) * 2); i++) {
    if (matrix[UFOPOS.i + ((ufoArr.length - 1) * 2)][i] === 'u') {
      stop++;
    }
  }
  if (stop === 0) {
    ufoArr.pop();
  }
};

module.exports = {
  genUfo,
  moveUfo,
  startUfo,
  ufoShoot
};
