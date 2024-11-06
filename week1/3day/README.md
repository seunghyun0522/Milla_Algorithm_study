# 💡**문제**

- 브루트포스
- 유레카 이론

[문제링크](https://www.acmicpc.net/problem/10448)

# 💡**문제 분석 요약**

문제 조건 :

- Tn = 1 + 2 + 3 + ... + n = n(n+1)/2
- Tn으로 구성된 합이 맞는 지 확인

# 💡**알고리즘 설계**

- Tn을 위한 함수를 따로 생성
- 3중 for문을 이용해 (최대 3개 비교 가능) 값의 존재를 확인 후 return 1, 0

# 💡코드

```jsx
const input = (
  process.platform == "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : require("fs").readFileSync("./ex.txt").toString()
)
  .trim()
  .split("\n");

let NUM = parseInt(input[0]);

for (let i = 1; i <= NUM; i++) {
  let result = eureka(parseInt(input[i]));
  console.log(result);
}

function eureka(num) {
  for (let i = 1; i < 45; i++) {
    for (let j = i; j < 45; j++) {
      for (let k = j; k < 45; k++) {
        if (triangle(i) + triangle(j) + triangle(k) === num) return 1;
      }
    }
  }

  return 0;
}

function triangle(n) {
  return (n * (n + 1)) / 2;
}
```

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int[] triNum = new int[45];
        for(int i = 1; i < 45; i++) {
            triNum[i] = i * (i + 1) / 2;
        }
        for(int i = 0; i < N; i++) {
            int n = Integer.parseInt(br.readLine());
            int result =  eureka(n, triNum);
            System.out.println(result);
        }
    }

    public static int eureka(int N, int[] triNum) {
        for(int j = 1; j < 45; j++) {
            for (int k = 1; k < 45; k++) {
                for (int z = 1; z < 45; z++) {
                    int sum = triNum[j] + triNum[k] + triNum[z];
                    if (sum == N) {
                        return 1;
                    }
                }
            }
        }
        return 0;
    }
}

```

# 💡시간복잡도

O(n^4) ….

# 💡 틀린 이유

ex) 고민을 많이 했던 문제

45 대신에 num을 넣었을 때 실행 시간이 너무 오래 걸려서 레퍼런스를 보다가 k가 1000보다 작거나 같다는 것을 보고 추가하게 됐다.

# 💡 틀린 부분 수정 or 다른 풀이

시간복잡도를 줄여보자!!

- 중복계산을 피하고 필요한 값만 조회하는 방식으로 변경
- 삼각수 리스트를 미리 만들고, 세 가지 조합을 찾아내는 과정에서 `set` 자료구조를 활용해서 속도를 개선

```jsx
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
```

# 💡 느낀점 or 기억할정보

- js 로 간단한 배열 다루는 것이 java만 접근 하면 어려운 거 같다.
