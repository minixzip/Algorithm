const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const inputData = parseInt(fileData[0]);
let sum = "";

for (let i = 1; i <= +inputData / 4; i++) {
  sum += "long ";
}

console.log(`${sum}int`);
