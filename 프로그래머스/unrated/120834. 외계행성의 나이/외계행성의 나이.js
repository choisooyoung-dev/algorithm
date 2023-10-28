const solution = (age) => {
    let answer = '';
    let strAgeArr = String(age).split("");
    console.log(strAgeArr.map(Number))
    //const index = ...strAgeArr.map(Number);
   
    let alphabetArr = [];
    let alphabet = '';	

    // ASCII CODE 97 = 'a'
    for (let i = 97; i <= 106; i++) {
        // console.log(String.fromCharCode(i));
        alphabet += String.fromCharCode(i);
    }
    
    // abcdefghij
    console.log(alphabet)
    // ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i', 'j']
    console.log(alphabet.split(""))
    
    alphabetArr.push(...alphabet.split(""));
     
    for(let i = 0; i < strAgeArr.length; i++) {
        answer += alphabetArr[strAgeArr[i]] ;
    }
    // console.log(answer);
    return answer;
}