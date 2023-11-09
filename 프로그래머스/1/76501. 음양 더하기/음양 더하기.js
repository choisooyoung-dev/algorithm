function solution(absolutes, signs) {
    
    var answer = 0;
    
    let newArr = [];
    
    for(let i = 0; i < absolutes.length; i++) {
        if(signs[i]) {
            newArr.push(absolutes[i]);
        } else {
            newArr.push(absolutes[i] * -1);
        }
    }
    
    answer = newArr.reduce(function (acc, curr) {
      acc = acc + curr;
      return acc;
    }, 0);
    console.log(newArr)
    return answer;

}