const { playerObj } = require('./canon')
const STDIN = process.stdin;

const shooting = () => {
  STDIN.setRawMode(true);
  STDIN.resume();
  STDIN.setEncoding('utf8')
  STDIN.on('data', (key) => {
    if (key === "\u0020") {
      arr[x][y] = playerObj.position
      arr[x - 1][y] = 'i'
      x--
      console.clear()
      print(arr)
    }
  });
};
