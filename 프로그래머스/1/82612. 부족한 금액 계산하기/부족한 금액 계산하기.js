function solution(price, money, count) {
    var arr = [];
    let newPrice = 0;
    for(let i = 1; i <= count; i++) {
        newPrice = i * price;
        arr.push(newPrice)
    }
 
    newPrice = arr.reduce((acc, curr) => acc + curr);
    
    if(newPrice - money < 0) return 0;
    
    return newPrice - money;
}