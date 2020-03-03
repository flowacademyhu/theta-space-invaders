const stdIn = process.stdin;
const board = require(`./../board/board`);

let playerLeftLimit = 0;
let playerRightLimit = 0;
const playerObj = { position: 0, prevPos: 0, life: 0 };

const initPlayer = (playerStartingPosition, playerStartingLife, leftLimitt, rightLimit, matrix) => {
  playerObj.position = playerStartingPosition;
  playerObj.life = playerStartingLife;
  playerLeftLimit = leftLimitt;
  playerRightLimit = rightLimit;
  putPlayerInMatrix(matrix);
};

const playerControl = (matrix) => {
  stdIn.setRawMode(true);
  stdIn.resume();
  stdIn.setEncoding('utf8');
  stdIn.on('data', (key) => {
    if (key === 'q') process.exit(0);
    if (key === 'a') {
      movePlayerLeft(playerObj);
      putPlayerInMatrix(matrix);
      console.clear();
      console.log(matrix);
    }
    if (key === 'd') {
      movePlayerRight(playerObj);
      putPlayerInMatrix(matrix);
      console.clear();
      console.log(matrix);
    }
  });
};

const movePlayerLeft = (player) => {
  if (player.position > playerLeftLimit) {
    player.prevPos = player.position;
    player.position--;
  }
};

const movePlayerRight = (player) => {
  if (player.position < playerRightLimit) {
    player.prevPos = player.position;
    player.position++;
  }
};

const putPlayerInMatrix = (matrix) => {
  const playerRow = matrix.length - 1;
  matrix[playerRow][playerObj.position] = 1;
  matrix[playerRow][playerObj.prevPos] = 0;
};

module.exports = {
  initPlayer,
  playerControl
};
