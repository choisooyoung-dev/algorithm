function solution(my_string) {
  var answer = "";
  let splitStr = my_string.split("");
  let strArr = splitStr.reverse();
  answer = strArr.join("");
  return answer;
}