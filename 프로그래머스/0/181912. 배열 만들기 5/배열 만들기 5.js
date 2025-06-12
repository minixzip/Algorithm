function solution(intStrs, k, s, l) {
  var answer = [];
  for (let i = 0; i < intStrs.length; i++) {
    const str = Number(intStrs[i].slice(s, s + l));
    if (str > k) {
      answer.push(str);
    }
  }
  return answer;
}
