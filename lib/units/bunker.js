const { BUNKERCHAR, BOARDWIDTH, BUNKER, EMPTYCHAR } = require('./../constants');

const bunkersIndex = [];

const initBunkers = (matrix) => {
  const tempWidth = Math.floor(BOARDWIDTH / 4);
  for (let i = 0; i < 3; i++) {
    bunkersIndex[i] = tempWidth * (i + 1);
  }
  putBunkerInMatrix(matrix);
};

const putBunkerInMatrix = (matrix) => {
  for (let i = 0; i < bunkersIndex.length; i++) {
    let bunkerWidth = BUNKER.width;
    for (let k = BUNKER.row; k > BUNKER.row - BUNKER.height; k--) {
      const row = k;
      let tempIndex = 0 - Math.floor(bunkerWidth / 2);
      for (let j = 0; j < bunkerWidth; j++) {
        const column = bunkersIndex[i] + tempIndex;
        matrix[row][column] = BUNKERCHAR;
        tempIndex++;
      }
      bunkerWidth -= 2;
    }
  }
};

const deleteBunkers = (matrix) => {
  const row = BUNKER.row - BUNKER.height;
  for (let i = row; i <= BUNKER.row; i++) {
    for (let j = 0; j < BOARDWIDTH; j++) {
      if (matrix[i][j] === BUNKERCHAR) matrix[i][j] = EMPTYCHAR;
    }
  }
};

module.exports = {
  initBunkers,
  deleteBunkers
};
