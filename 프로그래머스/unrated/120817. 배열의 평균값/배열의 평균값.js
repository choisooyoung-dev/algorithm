function solution(numbers) {
    var answer = 0;
    var reduceVal = numbers.reduce((acc, cur) => acc + cur,0);
    answer = reduceVal / numbers.length;
    
    return answer.toFixed(2);
}