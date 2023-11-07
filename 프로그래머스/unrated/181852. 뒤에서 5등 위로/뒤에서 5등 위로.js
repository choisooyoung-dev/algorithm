const solution = (num_list) => {
    let resultArr = [];
    const sortArr = num_list.sort((a, b) => a - b);
    for(let i = 5; i < sortArr.length; i++) {
        resultArr.push(sortArr[i]);
    }
    return resultArr;
}