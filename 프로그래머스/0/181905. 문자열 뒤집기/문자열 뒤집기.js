function solution(my_string, s, e) {
    let first = my_string.slice(0, s);
    let second = my_string.slice(s, e + 1).split('').reverse().join('');
    let third  = my_string.slice(e + 1);

    return first + second + third;
}
