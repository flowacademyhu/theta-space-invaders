const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

const keyProcessor = (key) => {
  if (key === "\u0020") {
    arr[x][y] = 
    arr[x-1][y] = 'i'
    x--
    console.clear()
    print(arr)
  }
};
stdin.on('data', keyProcessor);