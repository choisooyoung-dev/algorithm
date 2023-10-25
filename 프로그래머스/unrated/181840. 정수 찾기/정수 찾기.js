const solution = (num_list, n) => {
    let answer = [];
    num_list.forEach(num => {
        if(num === n) {
            answer.push(num);
        } 
    })
    // console.log(answer.length);
    return answer.length ? 1 : 0;
}