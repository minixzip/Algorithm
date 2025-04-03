const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");

const n = parseInt(fileData[0]);
let sum = 0;
for (i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);
