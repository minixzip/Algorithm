function main() {
  const data = getData();
  const n = data[0][0]; // 바구니 개수
  const m = data[0][1]; // 교환 횟수
  const result = [];

  // 0번부터 시작해서 공 번호는 1부터 넣음
  for (let i = 0; i < n; i++) {
    result[i] = i + 1;
  }

  for (let i = 1; i <= m; i++) {
    const a = data[i][0];
    const b = data[i][1];

    // a, b는 1-based이므로 0-based로 바꿔서 처리
    const temp = result[a - 1];
    result[a - 1] = result[b - 1];
    result[b - 1] = temp;
  }

  console.log(result.join(" "));
}

function getData() {
  const arr = require("fs").readFileSync(0).toString().trim().split("\n");
  const result = [];
  for (let row of arr) {
    const rowArr = row.split(" ");
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr.length === 1 ? rowArr[0] : rowArr);
  }
  return result.length === 1 ? result[0] : result;
}

main();