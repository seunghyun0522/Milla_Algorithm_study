const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("./ex.txt").toString()
)
  .trim()
  .split("\n");

let NUM = parseInt(input[0]);
const maxLimit = 45;

// 삼각수를 미리 계산하여 리스트에 저장
let triangles = [];
for (let i = 1; i < maxLimit; i++) {
  triangles.push((i * (i + 1)) / 2);
}

// 각 숫자에 대해 결과를 출력
for (let i = 1; i <= NUM; i++) {
  let result = eureka(parseInt(input[i]));
  console.log(result);
}

function eureka(num) {
  // 삼각수의 조합으로 num을 만들 수 있는지 확인
  for (let i = 0; i < triangles.length; i++) {
    for (let j = i; j < triangles.length; j++) {
      let remainder = num - triangles[i] - triangles[j];
      if (remainder >= 0 && triangles.includes(remainder)) {
        return 1;
      }
    }
  }
  return 0;
}
