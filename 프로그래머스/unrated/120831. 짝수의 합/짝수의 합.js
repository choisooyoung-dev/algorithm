const solution = (n) => {
    var nLowNum = [];
    for (let i = 0; i <=n; i+=2 ) {
        nLowNum.push(i);
    }
    const sumVal = nLowNum.reduce((acc, curr) => acc + curr, 0);
    console.log(sumVal)
    return sumVal;
}