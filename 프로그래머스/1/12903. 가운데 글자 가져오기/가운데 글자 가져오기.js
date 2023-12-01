function solution(s) {
    var answer = '';
    if(s.length % 2 === 0) {
       return answer = s.substr((s.length / 2)-1, 2)
    }
    
    answer = s.substr(Math.floor(s.length / 2), 1);
    return answer;
}