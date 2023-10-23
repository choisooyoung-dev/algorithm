function solution(s1, s2) {
    var answer = 0;
    
    answer = s1.filter(s1Str => s2.includes(s1Str)).length;
    
    return answer;
}