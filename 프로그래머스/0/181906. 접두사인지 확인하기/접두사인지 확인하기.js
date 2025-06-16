function solution(my_string, is_prefix) {
  var answer = 1;
  // for(let i=0; i<is_prefix.length; i++){
  //   if(my_string[i] !== is_prefix[i]){
  //     answer = 0;
  //     break;
  //   }
  // }
  answer = my_string.startsWith(is_prefix) ? 1 : 0;
  return answer;
}