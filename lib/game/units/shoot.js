const { BOARDHEIGHT, bulletHit, EMPTYCHAR, BULLETCHAR, MOTHERSHIPCHAR, BUNKERCHAR, POINTS, PLAYER, UFOCHAR, UFOBULLETCHAR, ufo1, ufo2, bulletObj } = require('../constants');
const { mothershipGotHit } = require('./mothership');
const mpg = require('mpg123');
const player = new mpg.MpgPlayer();

// const bulletObj = { position: 0, row: BOARDHEIGHT - 3, exists: false };

const resetBullet = (matrix) => {
  if (bulletObj.row < BOARDHEIGHT - 3) matrix[bulletObj.row + 1][bulletObj.position] = EMPTYCHAR;
  bulletObj.exists = false;
  bulletObj.row = BOARDHEIGHT - 3;
};

const checkIfHits = (matrix) => {
  if (bulletObj.row >= 0) {
    if (bulletObj.exists === true && matrix[bulletObj.row][bulletObj.position] !== EMPTYCHAR) {
      if (matrix[bulletObj.row][bulletObj.position] === MOTHERSHIPCHAR) {
        mothershipGotHit(matrix);
        increasePlayerPoints('mothership');
      } else if (matrix[bulletObj.row][bulletObj.position] === UFOCHAR) {
        ufoGotHit(matrix);
        increasePlayerPoints('ufo');
      } else if (matrix[bulletObj.row][bulletObj.position] === UFOBULLETCHAR) {
        ufoBulletGotHit(matrix);
      } else if (matrix[bulletObj.row][bulletObj.position] === BUNKERCHAR) bunkerGotHit(matrix);
      resetBullet(matrix);
    }
  }
};

const increasePlayerPoints = (str) => {
  if (str === 'ufo') PLAYER.points += POINTS.ufo;
  else if (str === 'mothership') PLAYER.points += POINTS.mothership;
};

const putBulletinmatrix = (matrix) => {
  checkIfHits(matrix);
  if (bulletObj.exists === true && bulletObj.row >= 0) {
    matrix[bulletObj.row][bulletObj.position] = BULLETCHAR;
    if (bulletObj.row < BOARDHEIGHT - 3 && matrix[bulletObj.row + 1][bulletObj.position] === BULLETCHAR) matrix[bulletObj.row + 1][bulletObj.position] = EMPTYCHAR;
    bulletObj.row--;
  } else {
    resetBullet(matrix);
  }
};

const bunkerGotHit = (matrix) => {
  matrix[bulletObj.row][bulletObj.position] = EMPTYCHAR;
};

const ufoGotHit = (matrix) => {
  player.play(bulletHit);
  matrix[bulletObj.row][bulletObj.position] = EMPTYCHAR;
};

const ufoBulletGotHit = (matrix) => {
  if (ufo1.x === bulletObj.row && ufo1.y === bulletObj.position) {
    matrix[bulletObj.row][bulletObj.position] = EMPTYCHAR;
    ufo1.exist = false;
  } else {
    matrix[bulletObj.row][bulletObj.position] = EMPTYCHAR;
    ufo2.exist = false;
  }
};

module.exports = {
  putBulletinmatrix,
  bulletObj
};
