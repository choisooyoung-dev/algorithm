function solution(number) {
    var answer = 0;
    let arr = [];
    for (let i = 0; i < number.length; i++) {
      for(let j = i + 1; j < number.length; j++) {
          for(let k = j + 1; k < number.length; k++) {
              arr.push(number[i] + number[j] + number[k]);
          }
       }
    }
    answer = arr.filter(num => num === 0)
   console.log(answer)
    return answer.length;
}