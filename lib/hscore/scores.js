const fs = require('fs');
const stdIn = process.stdin;
const { score } = require('./../game/constants');
const { table } = require('table');
const { menuBanner } = require('./../menu/banner');

// loads scoresTable.txt and returns scores as [[name, score],[name, score]...]
const readScores = () => {
  const data = fs.readFileSync('./lib/hscore/scoresTable.txt', 'utf8');
  const splitScores = data.split('\n');
  for (let i = 0; i < splitScores.length; i++) {
    splitScores[i] = splitScores[i].split(' ');
  }
  return splitScores;
};

// expects a name and a score, pushes it to scores and returns sorted scores as [[name, scores]...], also saves it to txt
const pushNewScoreToTable = (name, score) => {
  const table = readScores();
  table.push([name, score.toString()]);
  table.sort(function (a, b) { return b[1] - a[1]; });
  writeToFile(table);
  return table;
};

const writeToFile = (scores) => {
  let target = '';
  for (let i = 0; i < scores.length; i++) {
    target += scores[i].toString(' ');
    if (i < scores.length - 1) target += '\n';
  }
  target = target.replace(/,/g, ' ');
  fs.writeFile('./lib/hscore/scoresTable.txt', target, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
};

// reads and returns the first n highest scores from table as a string
const getHighScore = (n) => {
  const table = readScores();
  if (n > table.length) n = table.length;
  let target = '';
  for (let i = 0; i < n; i++) {
    target += table[i].toString();
    target += '\n';
  }
  target = target.replace(/,/g, '\t');
  return target;
};

const getHighScoreForTable = (n) => {
  const table = readScores();
  if (n > table.length) n = table.length;
  return table.splice(0, n);
};

const scoreControl = () => {
  stdIn.setRawMode(true);
  stdIn.resume();
  stdIn.setEncoding('utf8');
  stdIn.on('data', (key) => {
    if (key === 'q') score.stop = true;
  });
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

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const pushTable = (output) => {
  const width = (process.stdout.columns - (output.length / 7)) / 2;
  let spaces = '';
  for (let i = 0; i < width; i++) {
    spaces += ' ';
  }
  output = spaces + output;
  spaces = '\n' + spaces;
  output = output.replace(/\n/g, spaces);
  return output;
};

const hscore = async () => {
  process.stdin.removeAllListeners('data');
  scoreControl();
  score.stop = false;
  const data = getHighScoreForTable(5);
  let output = table(data, config);
  output = pushTable(output);
  while (score.stop === false) {
    console.clear();
    menuBanner();
    console.log(output);
    await sleep(200);
  }
};

module.exports = {
  readScores,
  pushNewScoreToTable,
  getHighScore,
  hscore
};
