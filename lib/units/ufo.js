const { UFOPOS } = require('./../constants');
const { ufo2, EMPTYCHAR, UFOCHAR, ufo1, BUNKERCHAR, UFOBULLETCHAR } = require('./../constants');

const genUfo = (n = 6, m = 6) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
    for (let j = 0; j < m; j++) {
      arr[i][j] = UFOCHAR;
    }
  }
  return arr;
};

//

const moveUfoBullet = (matrix) => {
  if (ufo1.exist === true) {
    if (ufo1.x + 1 < matrix.length && matrix[ufo1.x + 1][ufo1.y] === EMPTYCHAR) {
      matrix[ufo1.x + 1][ufo1.y] = UFOBULLETCHAR;
      if (matrix[ufo1.x][ufo1.y] !== UFOCHAR) {
        matrix[ufo1.x][ufo1.y] = EMPTYCHAR;
      }
      ufo1.x++;
    } else if (ufo1.x + 1 < matrix.length && matrix[ufo1.x + 1][ufo1.y] === BUNKERCHAR) {
      matrix[ufo1.x + 1][ufo1.y] = EMPTYCHAR;
      matrix[ufo1.x][ufo1.y] = EMPTYCHAR;
      ufo1.exist = false;
    } else {
      matrix[ufo1.x][ufo1.y] = EMPTYCHAR;
      ufo1.exist = false;
    }
  }
  if (ufo2.exist === true) {
    if (ufo2.x + 1 < matrix.length && matrix[ufo2.x + 1][ufo2.y] === EMPTYCHAR) {
      matrix[ufo2.x + 1][ufo2.y] = UFOBULLETCHAR;
      if (matrix[ufo2.x][ufo2.y] !== UFOCHAR) {
        matrix[ufo2.x][ufo2.y] = EMPTYCHAR;
      }
      ufo2.x++;
    } else if (ufo2.x + 1 < matrix.length && matrix[ufo2.x + 1][ufo2.y] === BUNKERCHAR) {
      matrix[ufo2.x + 1][ufo2.y] = EMPTYCHAR;
      matrix[ufo2.x][ufo2.y] = EMPTYCHAR;
      ufo2.exist = false;
    } else {
      matrix[ufo2.x][ufo2.y] = EMPTYCHAR;
      ufo2.exist = false;
    }
  }
};

//

const randomNum = (max = 5, min = 0) => {
  return Math.floor(Math.random() * ((max + 1) - min));
};

const ufoShoot = (ufoArr, matrix) => {
  if (ufo1.exist === false) {
    const x = randomNum();
    const y = randomNum(10);
    if (y > 7) {
      for (let i = (UFOPOS.i + ((ufoArr.length - 1) * 2 * 2)); i >= UFOPOS.i; i--) {
        if (matrix[i][UFOPOS.j + (x * 2 * 3)] === UFOCHAR) {
          // matrix[i - 1][UFOPOS.j + (x * 2)] = 'I';
          ufo1.exist = true;
          ufo1.x = i + 1;
          ufo1.y = UFOPOS.j + (x * 2 * 3);
          matrix[ufo1.x][ufo1.y] = UFOBULLETCHAR;
          return;
        }
      }
    }
  }
  if (ufo2.exist === false) {
    const x = randomNum();
    const y = randomNum(10);
    if (y > 7) {
      for (let i = (UFOPOS.i + ((ufoArr.length - 1) * 2 * 2)); i >= UFOPOS.i; i--) {
        if (matrix[i][UFOPOS.j + (x * 2 * 3)] === UFOCHAR) {
          // matrix[i - 1][UFOPOS.j + (x * 2)] = 'I';
          ufo2.exist = true;
          ufo2.x = i + 1;
          ufo2.y = UFOPOS.j + (x * 2 * 3);
          matrix[ufo2.x][ufo2.y] = UFOBULLETCHAR;
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
      matrix[k - 1][h] = UFOCHAR;
      matrix[k - 1][h - 1] = UFOCHAR;
      matrix[k - 1][h + 1] = UFOCHAR;
      matrix[k][h - 1] = UFOCHAR;
      matrix[k][h + 1] = UFOCHAR;
      matrix[k][h] = UFOCHAR;
      h += 2 * 3;
    }
    k += 2 * 2;
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
      if (matrix[k][h] === UFOCHAR && matrix[k][h + 1] === UFOCHAR && matrix[k][h - 1] === UFOCHAR && matrix[k - 1][h + 1] === UFOCHAR && matrix[k - 1][h] === UFOCHAR && matrix[k - 1][h - 1] === UFOCHAR) {
        matrix[k - 1][h - 1] = UFOCHAR;
        matrix[k - 1][h - 2] = UFOCHAR;
        matrix[k - 1][h] = UFOCHAR;
        matrix[k][h - 2] = UFOCHAR;
        matrix[k][h] = UFOCHAR;
        matrix[k][h - 1] = UFOCHAR;
        matrix[k - 1][h + 1] = EMPTYCHAR;
        matrix[k][h + 1] = EMPTYCHAR;
      } else {
        matrix[k - 1][h] = EMPTYCHAR;
        matrix[k - 1][h - 1] = EMPTYCHAR;
        matrix[k - 1][h + 1] = EMPTYCHAR;
        matrix[k][h - 1] = EMPTYCHAR;
        matrix[k][h + 1] = EMPTYCHAR;
        matrix[k][h] = EMPTYCHAR;
      }
      h += 2 * 3;
    }
    k += 2 * 2;
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
      if (matrix[k][h] === UFOCHAR && matrix[k][h + 1] === UFOCHAR && matrix[k][h - 1] === UFOCHAR && matrix[k - 1][h + 1] === UFOCHAR && matrix[k - 1][h] === UFOCHAR && matrix[k - 1][h - 1] === UFOCHAR) {
        matrix[k - 1][h + 1] = UFOCHAR;
        matrix[k - 1][h] = UFOCHAR;
        matrix[k - 1][h + 2] = UFOCHAR;
        matrix[k][h] = UFOCHAR;
        matrix[k][h + 2] = UFOCHAR;
        matrix[k][h + 1] = UFOCHAR;
        matrix[k - 1][h - 1] = EMPTYCHAR;
        matrix[k][h - 1] = EMPTYCHAR;
      } else {
        matrix[k - 1][h] = EMPTYCHAR;
        matrix[k - 1][h - 1] = EMPTYCHAR;
        matrix[k - 1][h + 1] = EMPTYCHAR;
        matrix[k][h - 1] = EMPTYCHAR;
        matrix[k][h + 1] = EMPTYCHAR;
        matrix[k][h] = EMPTYCHAR;
      }
      h += 2 * 3;
    }
    k += 2 * 2;
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
      if (matrix[k][h] === UFOCHAR && matrix[k][h + 1] === UFOCHAR && matrix[k][h - 1] === UFOCHAR && matrix[k - 1][h + 1] === UFOCHAR && matrix[k - 1][h] === UFOCHAR && matrix[k - 1][h - 1] === UFOCHAR) {
        matrix[k][h] = UFOCHAR;
        matrix[k][h - 1] = UFOCHAR;
        matrix[k][h + 1] = UFOCHAR;
        matrix[k + 1][h - 1] = UFOCHAR;
        matrix[k + 1][h + 1] = UFOCHAR;
        matrix[k + 1][h] = UFOCHAR;
        matrix[k - 1][h - 1] = EMPTYCHAR;
        matrix[k - 1][h + 1] = EMPTYCHAR;
        matrix[k - 1][h] = EMPTYCHAR;
      } else {
        matrix[k - 1][h] = EMPTYCHAR;
        matrix[k - 1][h - 1] = EMPTYCHAR;
        matrix[k - 1][h + 1] = EMPTYCHAR;
        matrix[k][h - 1] = EMPTYCHAR;
        matrix[k][h + 1] = EMPTYCHAR;
        matrix[k][h] = EMPTYCHAR;
      }
      h += 2 * 3;
    }
    k += 2 * 2;
    h = UFOPOS.j;
  }
  UFOPOS.i += 1;
  if (UFOPOS.dir === 0) {
    UFOPOS.dir = 1;
  } else {
    UFOPOS.dir = 0;
  }
  if (UFOPOS.speed > 1) {
    UFOPOS.speed--;
  }
};

const moveUfo = (ufoArr, matrix) => {
  let stop = 0;

  if (UFOPOS.dir === 0) {
    if (UFOPOS.j !== 1) {
      moveUfoLeft(ufoArr, matrix);
    } else {
      moveUfoDown(ufoArr, matrix);
    }
  } else {
    if (UFOPOS.j + ((ufoArr[0].length - 1) * 2 * 3) !== matrix[0].length - 2) {
      moveUfoRight(ufoArr, matrix);
    } else {
      if (UFOPOS.i + ((ufoArr.length - 1) * 2 * 2) !== matrix.length - 5) {
        moveUfoDown(ufoArr, matrix);
      } else {
        process.exit(0);
      }
    }
  }
  for (let i = 0; i <= UFOPOS.j + ((ufoArr[0].length - 1) * 2 * 3); i++) {
    if (matrix[UFOPOS.i + ((ufoArr.length - 1) * 2 * 2)][i] === UFOCHAR) {
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
  ufoShoot,
  moveUfoBullet
};
