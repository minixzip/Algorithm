function main() {
  const data = getData();
  // console.log(data);
  for (let i = 0; i < data.length - 1; i++) {
    // if (data[i][0] === 0 && data[i][1] === 0) continue;
    console.log(data[i][0] + data[i][1]);
  }
}

function getData() {
  const arr = require("fs").readFileSync(0).toString().trim().split("\n");
  const result = [];
  for (let row of arr) {
    const rowArr = row.split(" ");
    for (let k = 0; k < rowArr.length; k++)
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    result.push(rowArr.length === 1 ? rowArr[0] : rowArr);
  }
  return result.length === 1 ? result[0] : result;
}

main();
  