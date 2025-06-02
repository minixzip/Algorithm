function solution(arr, queries) {
  for(query of queries){
    const i = query[0];
    const j = query[1];

    const temp = arr[i]; // arr -> [0, 3]
    arr[i] = arr[j]; // arr[0] = arr[3]
    arr[j] = temp; // arr[3] = temp
  }

  return arr;
}