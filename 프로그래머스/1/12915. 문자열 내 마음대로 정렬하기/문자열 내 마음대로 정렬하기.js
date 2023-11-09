// 최종 리턴 값
let answer = [];

// 해당 값들을 문자열 앞에 붙여준 값들의 배열.
let newStrArr = [];

function solution(strArr, n) {
  strArr.forEach((str) => {
    // 1. 인덱스 n에 해당되는 배열의 값 추출한다. str[n]
    // 2. 해당 값들을 문자열 앞에 붙여준다.
    // str -> sun, bed, car
    // str[1] -> u, e, a
    // str = str[n] + str -> 'usun', 'ebed', 'acar'
    str = str[n] + str;

    // 합친 값들을 새로운 배열에 넣어줌
    newStrArr.push(str);

    // 3. 사전순으로 정렬 .sort()
    newStrArr.sort();
  });

  // 4. 앞글자 떼기
  newStrArr.forEach((nStr) => {
    answer.push(nStr.substr(1));
  });
  console.log(answer);

  return answer;
}