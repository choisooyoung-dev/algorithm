function solution(num_list) {
    var answer = [];
    var even = [];
    var odd = [];
    num_list.forEach(num => {
       
        if(num % 2 === 0) {
           even.push(num);
        } else {
            odd.push(num)
        }
        
        answer = [even.length, odd.length]
         
    })
    return answer;
}