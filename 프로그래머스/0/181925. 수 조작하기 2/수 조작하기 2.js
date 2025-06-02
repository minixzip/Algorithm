function solution(numLog) {
  var answer = '';

  for(let i=0; i<numLog.length-1; i++){
    const increment = numLog[i+1] - numLog[i];
    // console.log(numLog[i], numLog[i+1], increment);
    if(increment === 1){
      answer += 'w';
    }else if(increment === -1){
      answer += 's';
    }else if(increment === 10){
      answer += 'd';
    }else if(increment === -10){
      answer += 'a';
    }
  }
  return answer;
}