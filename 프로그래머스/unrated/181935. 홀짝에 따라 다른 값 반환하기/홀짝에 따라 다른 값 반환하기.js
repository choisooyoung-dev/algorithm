// n % 2 !== 0
// for, n 이하 홀수 

const solution = (n) => {
    let answer = 0;
    if(n % 2!=0){ // 홀수라면
        for(let i = 1; i <= n; i+=2) 
            answer += i;
    } else { // 짝수라면
        for(let i = 2; i <= n; i+=2) 
            answer += Math.pow(i,2);
    }
    return answer;
}