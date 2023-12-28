function solution(s) {
    var answer = '';
    const splitStrArr = s.split(' ');
    const maxNum = Math.max(...splitStrArr);
    const minNum = Math.min(...splitStrArr);
    answer = minNum + " " + maxNum
    console.log(answer)
    return answer;
}