

# 💡**문제 분석 요약**

문제 조건 : 

- 입력값 n에 대헤 해당하는 생성자를 찾는 문제 ( 생성자 n이 나올 결과값을 찾는 단순한 문제가 아니였다.)
- 256(=245+2+4+5) 일 때 n=256 , result =245 가 포인트였다.
- 가장 작은 생성자이기 때문에 작은 수부터 순차적으로 접근한다.

# 💡**알고리즘 설계**

- 1~n 까지 순차적으로 접근한다.(비효율적인 방법이라고 생각이 든다. n값이 매우 크다면 시간복잡도에 영향이 가지 않을까..?)
- 2중 for문을 쓰지 않고 싶어서 순차적으로 값이 증가할 때 for(i~n) i 값을 문자열로 바꿔주고 문자열끼리의 값을 정수로 바꿔 더해줬다.

# 💡코드

```jsx
const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("예제.txt").toString()
)
  .trim()
  .split("\n");

let result = 0;
let num = parseInt(input[0]);
let i = 0;

//1~n 까지의 순회
for (i < 0; i < num; i++) {
  let test = 0;
  
  // 123 -> "123" ->"1","2","3" -> 1+2+3 = 6
  i.toString()
    .split("")
    .map((x) => (test += parseInt(x)));

  if (test + i === num) break;
}

if (i === num) console.log(0);
else {
  result = i;

  console.log(result);
}

```

# 💡시간복잡도

- O(n * log(n))

# 💡 틀린 이유

# 💡 틀린 부분 수정 or 다른 풀이

- 시간 복잡도는 똑같지만 문자열 변환 없이 숫자 연산으로 자릿수를 더하는 방식으로 바꾸기

```jsx
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
```

# 💡 느낀점 or 기억할정보

- 2중 for문을 사용하고 싶지 않아서 split과 map을 사용했지만 문자열로 변환하고 다시 정수로 바꾸는 것이 더 비효율적인 것을 알게 됐다. 가끔씩은 정석대로 문제를 접근할 필요가 있는 거 같다.
