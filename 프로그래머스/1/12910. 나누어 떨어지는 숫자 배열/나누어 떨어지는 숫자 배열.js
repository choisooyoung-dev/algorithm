function solution(arr, divisor) {
    var answer = [];
    answer.pop();
        arr.forEach(num => {
            if(num % divisor === 0) {
                answer.push(num)
            } 
        })
        if (answer.length === 0) {
            answer.push(-1)
        }
         return answer.sort((a, b) => a - b);
}