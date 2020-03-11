const stdIn = process.stdin;
const { table } = require('table');
const { main } = require('./../game/main');
<<<<<<< HEAD
const { menuBanner } = require('./banner');
=======
const { hscore } = require('./../hscore/scores');
>>>>>>> develop

const menuContext = { run: true };

const menuItems = [
  {
    label: 'START',
    selected: true,
    handler: () => {
      // start game
    }
  },
  {
    label: 'H.SCORE',
    selected: false,
    handler: () => {
      // go to high score
      // console.log('hscore');
    }
  },
  {
    label: 'EXIT',
    selected: false,
    handler: () => {
      process.exit();
    }
  }
];

const handleDown = (key) => {
  if (key === '\u001b[A') {
    const currentIndex = menuItems.findIndex(item => {
      return item.selected;
    });
    if (currentIndex !== 0) {
      menuItems[currentIndex].selected = false;
      menuItems[currentIndex - 1].selected = true;
    }
  }
};
const handleUp = (key) => {
  if (key === '\u001b[B') {
    const currentIndex = menuItems.findIndex(item => {
      return item.selected;
    });
    if (currentIndex !== menuItems.length - 1) {
      menuItems[currentIndex].selected = false;
      menuItems[currentIndex + 1].selected = true;
    }
  }
};
const handleQuit = (key) => {
  if (key === 'q') process.exit(0);
};

const handleSpace = (key) => {
  if (key === '\u0020') {
    const current = menuItems.find(item => {
      return item.selected;
    });
    menuContext.run = false;
    console.clear();
    current.handler();
  }
};

const config = {
  columns: {
    0: {
      alignment: 'left',
      width: 10
    },
    1: {
      alignment: 'right',
      width: 10
    }
  }
};
const printmenu = () => {
  const data = menuItems.map(item => {
    const row = [];
    if (item.selected) {
      row.push('*');
    } else {
      row.push(' ');
    }
    row.push(item.label);
    return row;
  });
  const output = table(data, config);

  console.log(output);
};
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const menu = async () => {
<<<<<<< HEAD
  while (menuContext.run) {
    console.clear();
    menuBanner();
    printmenu();
    await sleep(200);
=======
  while (true) {
    menuContext.run = true;
    process.stdin.removeAllListeners('data');
    stdIn.setRawMode(true);
    stdIn.resume();
    stdIn.setEncoding('utf8');
    stdIn.on('data', (key) => {
      handleDown(key);
      handleUp(key);
      handleQuit(key);
      handleSpace(key);
    });
    while (menuContext.run) {
      console.clear();
      printmenu();
      await sleep(200);
    }
    if (menuItems[0].selected === true) {
      await main();
    }
    if (menuItems[1].selected === true) {
      await hscore();
    }
>>>>>>> develop
  }
};
module.exports = {
  menu
};
