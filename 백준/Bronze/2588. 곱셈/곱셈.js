
const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const a = parseInt(inputData[0]);
const b = parseInt(inputData[1]);

console.log(a * (b % 10));
console.log(a * Math.floor((b % 100) / 10));
console.log(a * Math.floor(b / 100));
console.log(a * b);
