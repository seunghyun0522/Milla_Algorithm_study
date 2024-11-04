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
