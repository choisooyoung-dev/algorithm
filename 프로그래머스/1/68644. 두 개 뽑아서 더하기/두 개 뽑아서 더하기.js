function solution(numbers) {
    var answer = [];
    let numArr = [];
    for(let i = 0; i <= numbers.length; i++) {
        for(j=i+1 ; j <numbers.length ; j++){
            let sum = numbers[i]+numbers[j]
            numArr.push(sum)
        }
       
    }
    numArr.sort((a, b) => a-b);
    answer = [...new Set(numArr)];

    return answer;
}