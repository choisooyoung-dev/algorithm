function solution(array, n) {
    var answer = 0;
    let correctArr = [];
    array.forEach((arr) => {
        if(arr === n) {
            correctArr.push(arr);
            answer = correctArr.length;
        }
    })
    return answer;
}