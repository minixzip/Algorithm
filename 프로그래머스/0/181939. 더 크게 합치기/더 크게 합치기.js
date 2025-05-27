function solution(a, b) {
    var answer = 0;
    const r1 = parseInt(a+''+b);
    const r2 = parseInt(b+''+a);
    
    if (r1 >= r2){
        return r1
    }else{
        return r2
    }
    
}