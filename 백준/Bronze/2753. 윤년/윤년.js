
const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const year = parseInt(fileData[0]); // 10

if (year % 4 == 0) {
  if (year % 100 !== 0 || year % 400 == 0) {
    console.log("1");
  } else {
    console.log("0");
  }
} else {
  console.log("0");
}
