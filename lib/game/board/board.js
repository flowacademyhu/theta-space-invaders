const { BOARDHEIGHT, UFOBULLETCHAR, BULLETCHAR, BOARDWIDTH, EMPTYCHAR, PLAYERLIMIT, PLAYER, BUNKERCHAR, UFOPOS, PLAYERCHAR, state, MOTHERSHIPCHAR, UFOCHAR } = require('../constants');
const c = require('axel');
const leftBorder = 5;
const topBorder = 3;

const generateMatrix = () => {
  const arr = new Array(BOARDHEIGHT);
  for (let i = 0; i < BOARDHEIGHT; i++) {
    arr[i] = new Array(BOARDWIDTH);
  }

  return arr;
};

// const printBoard = (arr) => {
//   const length = arr.length;
//   console.clear();
//   process.stdout.write('1');
//   for (let i = 2; i < length + 2; i++) {
//     process.stdout.write('111');
//   }
//   process.stdout.write('11');
//   console.log();
//   for (let i = 0; i < length; i++) {
//     console.log('11' + arr[i].join(' ').toString() + '11');
//   }
//   process.stdout.write('11');
//   for (let i = 2; i < length + 2; i++) {
//     process.stdout.write('111');
//   }
//   process.stdout.write('1');
//   console.log();
// };

const printBoard = (arr, ufoArr) => {
  const length = arr.length;
  const lengthi = arr[0].length;
  c.clear();
  let k = UFOPOS.i;
  let h = UFOPOS.j;
  for (let i = 0; i < ufoArr.length; i++) {
    for (let j = 0; j < ufoArr[0].length; j++) {
      if (arr[k][h] === UFOCHAR || arr[k][h + 1] === UFOCHAR) {
        if (arr[k][h - 1] === UFOCHAR) {
          // bottom left
          if (state.s === true) {
            c.bg(0, 86, 120);
          } else {
            c.bg(183, 193, 222);
          }
          c.point(h - 1 + leftBorder, k + topBorder);
        }
        if (arr[k][h] === UFOCHAR) {
          // bottom middle
          if (state.s === true) {
            c.bg(0, 86, 120);
          } else {
            c.bg(0, 86, 120);
          }
          c.point(h + leftBorder, k + topBorder);
        }
        if (arr[k][h + 1] === UFOCHAR) {
          // bottom right
          if (state.s === true) {
            c.bg(0, 86, 120);
          } else {
            c.bg(183, 193, 222);
          }
          c.point(h + 1 + leftBorder, k + topBorder);
        }
        if (arr[k - 1][h - 1] === UFOCHAR) {
          // top left
          if (state.s === true) {
            c.bg(0, 86, 120);
          } else {
            c.bg(0, 86, 120);
          }
          c.point(h - 1 + leftBorder, k - 1 + topBorder);
        }
        if (arr[k - 1][h] === UFOCHAR) {
          // top middle
          if (state.s === true) {
            c.bg(183, 193, 222);
          } else {
            c.bg(183, 193, 222);
          }
          c.point(h + leftBorder, k - 1 + topBorder);
        }
        if (arr[k - 1][h + 1] === UFOCHAR) {
          // top right
          if (state.s === true) {
            c.bg(0, 86, 120);
          } else {
            c.bg(0, 86, 120);
          }
          c.point(h + 1 + leftBorder, k - 1 + topBorder);
        }
      }
      h += 2 * 3;
    }
    k += 2 * 2;
    h = UFOPOS.j;
  }
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < lengthi; j++) {
      if (arr[i][j] === BUNKERCHAR) {
        c.bg(29, 6, 140);
        c.point(j + leftBorder, i + topBorder);
      }
      if (arr[i][j] === PLAYERCHAR) {
        c.bg(0, 86, 120);
        c.point(j + leftBorder, i + topBorder);
      }
      if (arr[i][j] === MOTHERSHIPCHAR) {
        c.bg(254, 0, 254);
        c.point(j + leftBorder, i + topBorder);
        c.cursor.restore();
        c.fg(254, 0, 254);
        c.text(j + leftBorder - 1, i + topBorder, '~');
        c.text(j + leftBorder + 1, i + topBorder, '~');
      }
      if (arr[i][j] === BULLETCHAR) {
        c.cursor.restore();
        c.fg(255, 42, 109);
        c.text(j + leftBorder, i + topBorder, '•');
      } else if (arr[i][j] === UFOBULLETCHAR) {
        c.cursor.restore();
        c.fg(222, 254, 71);
        c.text(j + leftBorder, i + topBorder, '•');
      } else if (arr[i][j] === 'Ж') {
        c.cursor.restore();
        c.fg(134, 0, 41);
        c.text(j + leftBorder, i + topBorder, 'Ж');
      } else if (arr[i][j] === '❤') {
        c.cursor.restore();
        c.fg(5, 217, 232);
        c.text(j + leftBorder, i + topBorder, '❤');
      }
    }
  }
  c.cursor.restore();
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
