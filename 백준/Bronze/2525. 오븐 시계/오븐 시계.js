function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  const h = data[0][0];
  const m = data[0][1];
  const c = data[1][0];

  let totalMin = (h * 60 + m + c) % (60 * 24);

  // if(totalMin >= 60*24) {
  //   totalMin -= 60*24;
  // }

  const result = {
    h: Math.floor(totalMin / 60),
    m: totalMin % 60,
  };

  console.log(result.h, result.m);
}
main();

function getData() {
  const fs = require("fs");
  // '23 48\n25\n'
  const fileData = fs.readFileSync(0).toString();
  // ['23 48', '25']
  const arr = fileData.trim().split("\n");

  const result = []; // 리턴할 2차원 배열
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i]; // '23 48', '25'
    const rowArr = row.split(" "); // ['23', '48'], ['25']
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr);
  }
  return result;
}
