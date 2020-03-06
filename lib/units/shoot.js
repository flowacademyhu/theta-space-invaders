const { BOARDHEIGHT, EMPTYCHAR, BULLETCHAR } = require('../constants');

const bulletObj = { position: 0, row: BOARDHEIGHT - 2, exists: false };

const resetBullet = (matrix) => {
  bulletObj.exists = false;
  matrix[bulletObj.row + 1][bulletObj.position] = EMPTYCHAR;
  bulletObj.row = BOARDHEIGHT - 2;
};

const checkIfHits = (matrix) => {
  if (bulletObj.row > 0) {
    if (bulletObj.exists === true && matrix[bulletObj.row][bulletObj.position] !== EMPTYCHAR) {
      resetBullet(matrix);
    }
  }
};

const putBulletinmatrix = (matrix) => {
  checkIfHits(matrix);
  if (bulletObj.exists === true && bulletObj.row >= 0) {
    matrix[bulletObj.row][bulletObj.position] = BULLETCHAR;
    if (bulletObj.row < BOARDHEIGHT - 2) matrix[bulletObj.row + 1][bulletObj.position] = EMPTYCHAR;
    bulletObj.row--;
  } else {
    resetBullet(matrix);
  }
};

module.exports = {
  putBulletinmatrix,
  bulletObj
};
