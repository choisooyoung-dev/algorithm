function solution(s) {
    var answer = [];
    let stack = [];
    let sArr = [...s];
    console.log(sArr)
   for(let i = 0; i < sArr.length; i++) {
       if(!stack.includes(s[i])) {
           answer.push(-1);
           stack.push(s[i])
           continue;
       }
       
       if(stack.includes(s[i])) {
           answer.push(stack.length - stack.lastIndexOf(s[i]));
           stack.push(s[i]);
           continue;
       }
   }
    return answer;
}