# 💡**문제**

- 브루트포스
- 일곱 난쟁이

[문제링크](https://www.acmicpc.net/problem/2309)

# 💡**문제 분석 요약**

문제 조건 :

- 9개 값 중 7개의 합이 100인 상황이고 2개를 뺀 나머지를 출력하자
- 결과는 오름차순으로 출력

# 💡**알고리즘 설계**

- 7중 for문..? 8중 for문..? 을 사용해야하나 고민했지만 합이 100이라는 것은 반대로 없는 값들을 전체 합에서 뺀다면… 100이 나올 것이다.

# 💡코드

```jsx
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

//전체 합을 미리 구하기
newData.map((x) => {
  sum += x;
});

//이상한 값 2개를 담을 변수
let falseData1, falseData2;

for (let i = 0; i < newData.length; i++) {
  for (let j = i + 1; j < newData.length; j++) {
    //이상한 값 2개를 전체 sum 에서 뺄 경우 100이 나오면 종료 시킨다.
    if (sum - newData[i] - newData[j] === 100) {
      falseData1 = newData[i];
      falseData2 = newData[j];
      break;
    }
  }
}

//3중 for문을 사용하기 싫었음
for (let i = 0; i < newData.length; i++) {
  if (falseData1 === newData[i] || falseData2 === newData[i]) continue;
  console.log(newData[i]);
}
```

# 💡시간복잡도

- O(n^2)

# 💡 틀린 이유

# 💡 틀린 부분 수정 or 다른 풀이

-

# 💡 느낀점 or 기억할정보

- 미루지 않기 ; ;
