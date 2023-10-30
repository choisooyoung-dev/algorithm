const solution = (start_num, end_num) => {
    let arr = [];
    for(let i = end_num; i <= start_num; i++) {
        arr.push(i);
    }
    return arr.reverse();
}