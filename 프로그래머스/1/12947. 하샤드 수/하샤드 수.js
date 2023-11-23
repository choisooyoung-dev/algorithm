function solution(x) {
    var xSum = 0;
    var xArr = String(x).split("");
    for(let i = 0; i < xArr.length; i++) {
        xSum += Number(xArr[i]);
    }
    // console.log(xSum)
    return x % xSum === 0 ? true : false;
}