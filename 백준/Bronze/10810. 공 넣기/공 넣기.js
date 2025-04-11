function main() {
  const data = getData();
  // console.log(data); // [ [ 5, 4 ], [ 1, 2, 3 ], [ 3, 4, 4 ], [ 1, 4, 1 ], [ 2, 2, 2 ] ]
  const n = data[0][0]; // 5
  const result = new Array(n).fill(0); // [ 0, 0, 0, 0, 0 ]

  for (let i = 1; i < data.length; i++) {
    const rowArr = data[i]; // i=1 [ 1, 2, 3 ], i=2 [ 3, 4, 4 ] ...
    const x = rowArr[0]; // 시작 바구니 번호
    const y = rowArr[1]; // 종료 바구니 번호
    const z = rowArr[2]; // 공 번호

    /*
    1회차: [ 1, 2, 3 ] => 3 3 0 0 0
    2회차: [ 3, 4, 4 ] => 3 3 4 4 0
    3회차: [ 1, 4, 1 ] => 1 1 1 1 0
    4회차: [ 2, 2, 2 ] => 1 2 1 1 0
    */
    for (let k = x; k <= y; k++) {
      result[k - 1] = z;
    }
  }

  // [1, 2, 1, 1, 0] => '1 2 1 1 0'
  const strResult = result.join(" ");
  console.log(strResult);

  // // '1 2 1 1 0' => [1, 2, 1, 1, 0]
  // const reArray = strResult.split(" ");
  // console.log(reArray);
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
