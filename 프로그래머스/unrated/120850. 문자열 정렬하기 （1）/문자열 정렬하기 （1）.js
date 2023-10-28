function solution(my_string) {
  var answer = [];
  let regex = /[^0-9]/g;

  let str = my_string.replace(regex, "");
  answer = str.split("").map(Number).sort();
    console.log(str);
    console.log(str.split("").sort());
    console.log( str.split("").map(Number));

  return answer;
}