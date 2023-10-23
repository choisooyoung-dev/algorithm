function solution(n) {
    var answer = 0;
    let remain = n % 7;
    
    
    // n = 1 ~ 7, return 1
    
    if(n <= 7 || n <= 1) {
        return answer = 1;
    } 
    else if (n % 7 !== 0){
        return answer = Math.floor(n / 7)  + 1;
        console.log(answer)
    } else return answer = n / 7;
    
}