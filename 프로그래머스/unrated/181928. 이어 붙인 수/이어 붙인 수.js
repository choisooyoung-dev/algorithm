const solution = (num_list) => {
    let oddArr = [];
    let evenArr = [];
    let result = [];
    num_list.map((v) => {
        if(v % 2 !== 0) {
            oddArr.push(v);
        } else {
            evenArr.push(v);
        }
    })
    
    return Number(oddArr.join('')) + Number(evenArr.join(''));
}