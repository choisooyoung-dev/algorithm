function solution(a, b, n) {
    // 갖게되는 콜라 수
    let answer = 0;
  
    while(n >= a) {
        // 받는 콜라 수
        let cola = Math.floor(n / a) * b;

        // 남은 콜라 수
        n = (n % a) + cola;   

        // 총 콜라 수에 추가해줌
        answer += cola
    }
    return answer;
}