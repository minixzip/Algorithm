function solution(a, b) {
    return a%2==0 && b%2==0 ? Math.abs(a-b) : a%2!=0 && b%2!=0 ? a**2 + b**2 : 2*(a+b) 
}