const board = require(`./lib/board/board`);
const canon = require(`./lib/units/canon`);

const BOARDHEIGHT = 15;
const BOARDWIDTH = 20;
const REFRESHRATE = 1000; // in ms
const MAXLIFE = 2;
const PLAYERLIMIT = { left: 3, right: 11 };

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function main () {
  const map = board.generateBoard(BOARDHEIGHT, BOARDWIDTH);
  canon.initPlayer(PLAYERLIMIT.left, MAXLIFE, PLAYERLIMIT.left, PLAYERLIMIT.right, map);
  canon.playerControl(map);
  while (true) {
    // console.log(map);
    board.printBoard(map);
    await sleep(REFRESHRATE);
    console.clear();
  }
}

main();
