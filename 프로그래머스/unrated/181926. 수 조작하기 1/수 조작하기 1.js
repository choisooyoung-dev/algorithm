function solution(n, control) {
    let answer = n;
    
    for(let i = 0; i < control.length; i++){
        switch(control[i]){
            case "w":
                answer = answer + 1;
                break;
            case "s":
                answer = answer - 1;
                break;
            case "d":
                answer = answer + 10;
                break;
            case "a":
                answer = answer - 10;
                break;
        }
    }
    return answer;
}