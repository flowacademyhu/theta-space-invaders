const { BOARDHEIGHT, EMPTYCHAR } = require('../constants');

const bulletObj = { position: 0, row: BOARDHEIGHT - 2, exists: false };
const putBulletinmatrix = (matrix) => {
  if (bulletObj.exists === true && bulletObj.row >= 0) {
    matrix[bulletObj.row][bulletObj.position] = 'I';
    if (bulletObj.row < BOARDHEIGHT - 2) matrix[bulletObj.row + 1][bulletObj.position] = EMPTYCHAR;
    bulletObj.row--;
  } else {
    bulletObj.exists = false;
    matrix[0][bulletObj.position] = EMPTYCHAR;
    bulletObj.row = BOARDHEIGHT - 2;
  }
};

module.exports = {
  putBulletinmatrix,
  bulletObj
};
