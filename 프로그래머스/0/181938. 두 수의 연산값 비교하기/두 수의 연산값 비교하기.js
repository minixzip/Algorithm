function solution(a, b) {
    var answer = 0;
    num1 = parseInt(String(a) + String(b))
    num2 = 2 * a * b
    if(num1<num2){
        return num2
    }else{
        return num1
    }
    ;
}