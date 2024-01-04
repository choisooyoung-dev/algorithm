function solution(k, m, score) {
    var answer = 0;
    let sortScore = score.sort((a, b) => b - a);
    let arr = [];
    
    for(let i = 0; i < sortScore.length; i += m) {
        arr.push(sortScore.slice(i, i + m));
    }
    
    let appleArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length === m ) {
            appleArr.push(arr[i]);
        }
    }
    
    console.log(appleArr)
    
    appleArr.forEach(box => {
        let cost = box[box.length-1] * m
        answer += cost;
    })
    return answer;
}