const { playerObj } = require('./canon')
const { BOARDHEIGHT } = require('../constants')
const STDIN = process.stdin;

const bulletObj = { position: 0, row: BOARDHEIGHT - 2, exists: false };
const putBulletinmatrix = (matrix) => {
  if (bulletObj.exists === true) {
    matrix[bulletObj.row][bulletObj.position] = 'I'
    bulletObj.row--;
  }
};

module.exports = {
  putBulletinmatrix,
  bulletObj
};
