const { BUNKERCHAR, BOARDWIDTH, BUNKER } = require('./../constants');

const bunkerObj1 = { position: 3, prevPos: 3, life: 0 };
const bunkerObj2 = { position: 8, prevPos: 8, life: 0 };
const bunkerObj3 = { position: 13, prevPos: 12, life: 0 };


const bunkersIndex = { 1: 0, 2: 0, 3: 0 };
const bunkers = {};

const initBunkers = (matrix) => {
  const tempWidth = BOARDWIDTH / 4;
  for (let i = 1; i <= bunkersIndex.length; i++) {
    bunkersIndex.i = tempWidth * i;
  }
  generateBunkerPosition();
  putBunkerInMatrix(matrix);
};

const generateBunkerPosition = () => {
  const height = BUNKER.height;
  for (let i = 0; i < bunkersIndex.length; i++) {
    bunkers.i = new Array(height);
    let temp = 0;
    for (let j = 0; j < height; j++) {
      let length = 1;
      while (temp < length) {
        bunkers.i[j].push()
      }
    }
  }
};

const putBunkerInMatrix = (matrix) => {
  
};

const putBunker2InMatrix = (matrix) => {
  const bunkerRow = matrix.length - 3;
  matrix[bunkerRow][bunkerObj2.position] = BUNKERCHAR;
  matrix[bunkerRow][bunkerObj2.position + 1] = BUNKERCHAR;
  matrix[bunkerRow][bunkerObj2.position + 2] = BUNKERCHAR;
};

const putBunker3InMatrix = (matrix) => {
  const bunkerRow = matrix.length - 3;
  matrix[bunkerRow][bunkerObj3.position] = BUNKERCHAR;
  matrix[bunkerRow][bunkerObj3.position + 1] = BUNKERCHAR;
  matrix[bunkerRow][bunkerObj3.position + 2] = BUNKERCHAR;
};

module.exports = {
  initBunker1,
  initBunker2,
  initBunker3
};
