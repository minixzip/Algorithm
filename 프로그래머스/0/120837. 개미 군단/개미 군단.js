function solution(hp) {
    let a = hp/5;
    let b = Math.floor((hp%5)/3);
    let c = Math.floor((hp%5)%3)
    return Math.floor(a+b+c);
}