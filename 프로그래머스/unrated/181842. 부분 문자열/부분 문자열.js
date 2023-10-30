function solution(str1, str2) {
    var answer = 0;
    let matchVal = str2.indexOf(str1)
    if(matchVal != -1)  answer = 1
    return answer;
}