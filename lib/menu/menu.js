const stdIn = process.stdin;
const { table } = require('table');

const menuItems = [
  {
    label: 'START',
    selected: true,
    handler: () => {

    }
  },
  {
    label: 'H.SCORE',
    selected: false,
    handler: () => {

    }
  },
  {
    label: 'EXIT',
    selected: false,
    handler: () => {

    }
  }
];

stdIn.setRawMode(true);
stdIn.resume();
stdIn.setEncoding('utf8');
stdIn.on('data', (key) => {
  // if (key === 'n') {
  if (key === '\u001b[A') {
    const currentIndex = menuItems.findIndex(item => {
      return item.selected;
    });
    if (currentIndex !== 0) {
      menuItems[currentIndex].selected = false;
      menuItems[currentIndex - 1].selected = true;
    }
  }
  // if (key === 'm') {
  if (key === '\u001b[B') {
    const currentIndex = menuItems.findIndex(item => {
      return item.selected;
    });
    if (currentIndex !== menuItems.length - 1) {
      menuItems[currentIndex].selected = false;
      menuItems[currentIndex + 1].selected = true;
    }
  }
  if (key === 'q') process.exit(0);
});

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

async function main () {
  while (true) {
    console.clear();
    printmenu();
    await sleep(200);
  }
}
main();
