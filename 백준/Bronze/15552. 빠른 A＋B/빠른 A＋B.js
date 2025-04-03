const fileData = require('fs').readFileSync(0).toString().trim().split('\n');

const T = parseInt(fileData[0]);
let sum = '';

for (let i = 1; i <= T; i++) {
  const DATA = fileData[i].split(' ');
  sum += parseInt(DATA[0]) + parseInt(DATA[1]) + '\n';
}

console.log(sum);