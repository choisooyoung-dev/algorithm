function solution(n) {
    let x = Math.sqrt(n);
    if(x % 1 === 0) {
        return (x + 1) ** 2;
    }
    return -1;       
}

// 정수 x의 제곱
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴

