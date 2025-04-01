const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const a = parseInt(fileData[0]); 
const b = parseInt(fileData[1]); 
const c = parseInt(fileData[2]);

if (a === b && b === c) { 
  console.log(10000 + a * 1000);
} else if (a === b || a === c) {
  console.log(1000 + a * 100);
} else if (b === c) {
  console.log(1000 + b * 100);
} else {
  console.log(Math.max(a, b, c) * 100);
}
