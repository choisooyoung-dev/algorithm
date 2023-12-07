function solution(n, k) {
  var answer = [];
  let arr = [];
// n만큼 숫자 배열을 만든다.
  for (let i = 1; i <= n; i++) arr.push(i);
// n=3 -> [1, 2, 3]

// n으로 만들 수 있는 경우의 수
  let fac = arr.reduce((acc, val) => acc * val, 1);
// n=3-> 6
    
// 배열은 0부터 시작하니 1 줄여줌
  k--;
    
  while (answer.length !== n) {
    //n-1 까지의 경우의 수
    fac = fac / arr.length;
      
    // k / fac -> 선택한 숫자 
    // k = 5 -> 4(-- 해줬음)
    let temp = arr[Math.floor(k / fac)];

    answer.push(temp);
    k = k % fac;
    arr = arr.filter(e => e !== temp);
  }
  return answer;
    
}