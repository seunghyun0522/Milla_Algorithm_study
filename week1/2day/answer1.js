const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("./ex.txt").toString()
)
  .trim()
  .split("\n");

//미리 sorting과 문자를 정수로 변경
let newData = input.map(Number);
newData.sort((a, b) => a - b);

let sum = 0;

newData.map((x) => {
  sum += x;
});

let falseData1, falseData2;
for (let i = 0; i < newData.length; i++) {
  for (let j = i + 1; j < newData.length; j++) {
    if (sum - newData[i] - newData[j] === 100) {
      falseData1 = newData[i];
      falseData2 = newData[j];
      break;
    }
  }
}

for (let i = 0; i < newData.length; i++) {
  if (falseData1 === newData[i] || falseData2 === newData[i]) continue;
  console.log(newData[i]);
}
