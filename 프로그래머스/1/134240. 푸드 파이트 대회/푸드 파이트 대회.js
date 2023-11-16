// 칼로리 적은 순서대로
// 물 0번, 1번 음식 3개, 2번 음식 4개, 3번 음식 6개
//       1223330333221 -> 1번 음식 1개 못씀

function solution(food) {
    var answer = [0];
    
    // 1223330333221
    // [1, 3, 4, 6]
    
    // food index 마지막꺼(물 0번) 제외까지만 돌게끔
    for(let i=food.length; i > 0; i--) {
        
        // food 반으로 나누면 각 음식의 반복 수가 됨
        // [3, 4, 6] -> [1, 2, 3]
         let reNum = Math.floor(food[i]/2);
        
        // i의 수를 j만큼 반복
         for(let j = 0; j < reNum; j++) {
            // 우측 끝에서부터 넣어주기
             answer.push(i);
             
             // 좌측 끝에서부터 넣어주기
            answer.unshift(i)
            
        }
         // console.log(answer)
    }

    return answer.join('');
}