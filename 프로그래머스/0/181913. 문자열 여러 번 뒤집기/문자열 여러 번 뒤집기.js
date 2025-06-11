function solution(my_string, queries) {
  var answer = my_string;

  queries.forEach((elem) => {
    // const s = elem[0];
    // const e = elem[1];
    const [s, e] = elem; // 구조 분해 할당

    const first = answer.slice(0, s);
    const second = answer.slice(s, e + 1);
    const third = answer.slice(e + 1);

    answer = first + second.split('').reverse().join('') + third;
  });
  
  return answer;
}