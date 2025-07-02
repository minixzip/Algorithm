function solution(num_list) {
    var mul = 1;
    let add = 0;
    for(let i = 0; i<num_list.length; i++){
        add += num_list[i]    
        mul *= num_list[i]  
    }
    add = add*add
    if(add>mul){
        return 1;
    }else{
        return 0;
    }
}