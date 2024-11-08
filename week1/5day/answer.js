const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number);

let array = [];
for (let i = 1; i < input.length; i++) {
  let row = input[i];
  array.push(row);
}

const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function checkWhite(x, y) {
  let cnt = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (array[i + x][j + y] !== white[i][j]) cnt++;
    }
  }
  return cnt;
}

function checkBlack(x, y) {
  let cnt = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (array[i + x][j + y] !== black[i][j]) cnt++;
    }
  }
  return cnt;
}
let min_array = [];
for (let i = 0; i < n - 7; i++) {
  for (let j = 0; j < m - 7; j++) {
    min_array.push(checkWhite(i, j));
    min_array.push(checkBlack(i, j));
  }
}

console.log(Math.min(...min_array));
