function solution(arr, queries) {
    let answer = [];
    queries.forEach( function ([s, e, k]) {

        let minVal = Infinity;
        for( let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < minVal) {
                minVal = arr[i];
            }
        }
        if (minVal !== Infinity) {answer.push(minVal)}
        else {answer.push(-1)}
           
    })
    return answer;
}