function solution(s) {
    var answer = 0;
    let idx = s;
    let arr = [];
    const strArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
 
    for(let i = 0; i < strArr.length; i++) {
        arr = idx.split(strArr[i])
        idx = arr.join(i);
    }
    
    return Number(idx);
}
