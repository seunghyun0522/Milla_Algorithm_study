const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let n = parseInt(input[0]);
let flag = 0;
for (let i = 1; i <= n; i++) {
  let tmp = i;
  let sum = 0;
  while (tmp > 0) {
    sum += tmp % 10;
    tmp = Math.floor(tmp / 10);
  }
  sum += i;
  if (sum === n) {
    console.log(i);
    flag = 1;
    break;
  }
}

if (flag === 0) console.log(0);
