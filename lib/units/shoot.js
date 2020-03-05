const { playerObj } = require('./canon')
const STDIN = process.stdin;

const shooting = () => {
  STDIN.setRawMode(true);
  STDIN.resume();
  STDIN.setEncoding('utf8');
  STDIN.on('data', (key) => {
    if (key === "\u0020") {
      bulletObj.position = playerObj.position;
      bulletObj.exists = true;
    }
  });
};

const bulletObj = { position: 0, exists: false };
