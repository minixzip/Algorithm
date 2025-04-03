const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");

let totalPrice = parseInt(fileData[0]); // 총합
let T = parseInt(fileData[1]); // 라인개수
let sum = 0;
for (let i = 2; i < T + 2; i++) {
  const data = fileData[i].split(" "); // i번째 줄에서 스페이스로 나누고
  const A = parseInt(data[0]); // i줄에서 첫번째로 받는 값이 A
  const B = parseInt(data[1]); // i줄에서 두번째로 받는 값이 B
  sum += A * B;
}
if (sum == totalPrice) {
  console.log("Yes");
} else {
  console.log("No");
}
