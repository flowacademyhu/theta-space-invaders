const fs = require('fs');

// loads scoresTable.txt and returns scores as [[name, score],[name, score]...]
const readScores = () => {
  const data = fs.readFileSync('./lib/scoresTable.txt', 'utf8');
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
    target += '\n';
  }
  target = target.replace(/,/g, ' ');
  fs.writeFile('./lib/scoresTable.txt', target, (err) => {
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

module.exports = {
  readScores,
  pushNewScoreToTable,
  getHighScore
};
