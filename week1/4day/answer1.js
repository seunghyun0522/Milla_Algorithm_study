const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("./ex.txt").toString()
)
  .trim()
  .split("\n");

let [a, b] = input[0].split(" ").map(Number);

let caseData = 153;
let sum = 0;
let result;
if (a === b) {
  result = (caseData - (10 - a)) / caseData;
  console.log(result.toFixed(3));
} else {
  let cnt = 0;
  for (let i = 1; i <= 10; i++) {
    for (let j = i + 1; j <= 10; j++) {
      sum = i + j;
      if (sum % 10 < (a + b) % 10) {
        if (i === a || i === b || j === a || j === b) cnt += 2;
        else cnt += 4;
      }
    }
  }
  result = cnt / caseData;
  console.log(result.toFixed(3));
}

/**
 *
 * 10땡 : 1
 * 9땡 : 1
 * 8땡~1땡 :
 *
 * 땡 : 총 10
 *
 * 9끗 : (1,8) (2,7), (3,6) (4,5) (9, 10)
 * 8끄
 */
