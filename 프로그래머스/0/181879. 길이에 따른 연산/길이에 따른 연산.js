function solution(num_list) {
    var result;

    if (num_list.length >= 11) {
        result = 0;
        for (let i = 0; i < num_list.length; i++) {
            result += num_list[i];
        }
    } else {
        result = 1;
        for (let i = 0; i < num_list.length; i++) {
            result *= num_list[i];
        }
    }
    return result;
}
