const { BUNKERCHAR, BOARDWIDTH, BUNKER } = require('./../constants');

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

module.exports = {
  initBunkers
};
