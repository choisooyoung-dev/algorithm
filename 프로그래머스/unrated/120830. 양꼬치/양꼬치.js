function solution(n, k) {
    let answer = 0;
    let food = n;
    let drink = k;
    let service = drink - (Math.floor(food / 10)); 
    answer = food * 12000 + service * 2000;
    return answer;
}