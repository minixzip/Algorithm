const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const lines = parseInt(fileData[0]);

for (let i = 0; i < lines; i++) {
  let star = "";
  for (let k = 0; k <= i; k++) {
    star += "*";
  }
  console.log(star);
}