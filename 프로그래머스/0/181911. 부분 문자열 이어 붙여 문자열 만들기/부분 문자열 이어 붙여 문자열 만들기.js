function solution(my_strings, parts) {
  var answer = '';
  my_strings.forEach((str, i) => {
    const [s, e] = parts[i];
    // slice() 사용
    answer += str.slice(s, e + 1);
  });
  return answer;
}