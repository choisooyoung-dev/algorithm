function solution(my_string, n) {
    var answer = '';
   var arr = [...my_string];
    arr.forEach(str => str.repeat(n).join(""))
    console.log(arr)
    return answer;
}