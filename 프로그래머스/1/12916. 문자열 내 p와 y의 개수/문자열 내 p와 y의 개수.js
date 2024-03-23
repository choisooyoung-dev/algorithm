function solution(s){
    
    // 파라미터 s의 문자열을 넣어줄 배열
    let arr = [];
    // 'p', 'y' 길이 넣어줄 변수
    let pArr = [];
    let yArr = [];
    
    // 파라미터 s 문자열을 배열에 넣어주기
    arr = [...s];
    // console.log(arr);
    
    // p 찾아서 배열에 넣기
   arr.forEach((str)=> {
       if(str === 'p' || str === 'P') {
           pArr.push(str);
       } else if(str === 'y' || str === 'Y') {
           yArr.push(str);
       }
   })
    console.log(pArr);
    console.log(yArr);
   
  
    
    if(pArr.length === yArr.length) {
        return true;
    } else {
        return false;
    }
   
}
