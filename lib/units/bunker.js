// const stdIn = process.stdin;
// const board = require('./../board/board');

const bunkerObj1 = { position: 3, prevPos: 3, life: 0 };
const bunkerObj2 = { position: 8, prevPos: 8, life: 0 };
const bunkerObj3 = { position: 13, prevPos: 12, life: 0 };
const BUNKERCHAR = 'B';

const initBunker1 = (matrix) => {
  putBunker1InMatrix(matrix);
};

const initBunker2 = (matrix) => {
  putBunker2InMatrix(matrix);
};

const initBunker3 = (matrix) => {
  putBunker3InMatrix(matrix);
};

const putBunker1InMatrix = (matrix) => {
  const bunkerRow = matrix.length - 3;
  matrix[bunkerRow][bunkerObj1.position] = BUNKERCHAR;
  matrix[bunkerRow][bunkerObj1.position + 1] = BUNKERCHAR;
  matrix[bunkerRow][bunkerObj1.position + 2] = BUNKERCHAR;
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