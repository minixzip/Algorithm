const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const Data = fileData;
console.log(Data + "??!");
