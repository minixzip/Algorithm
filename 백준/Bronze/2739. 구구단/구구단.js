const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const dan = parseInt(fileData[0]);

for (let i = 1; i <= 9; i++) {
  console.log(dan + " * " + i + " = " + dan * i);
}
