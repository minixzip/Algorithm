const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");
// console.log(fileData);

let h = parseInt(fileData[0]); // 10
let m = parseInt(fileData[1]); // 20

if (m < 45) {
  h = h - 1;
  m = 60 - (45 - m);
} else {
  m -= 45;
}

if (h < 0) h = 23;

console.log(h, m);
