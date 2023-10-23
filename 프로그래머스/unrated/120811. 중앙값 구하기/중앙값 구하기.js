function solution(arr) {
    
    arr.sort((a,b) => {
        return a - b;
    });
    
    var half = Math.floor(arr.length / 2);
    return arr[half];
} 