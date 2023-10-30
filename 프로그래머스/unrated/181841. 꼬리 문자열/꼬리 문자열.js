function solution(str_list, ex) {
    var answer = '';
   const filterFunc = str_list.filter(str => !str.includes(ex));
    answer = filterFunc.join('')
    return answer;
}