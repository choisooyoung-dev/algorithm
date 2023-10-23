const solution = (money) => {
    let arr = [];
    let iceCountVal = Math.floor(money / 5500);
    let remainVal = money - (iceCountVal * 5500);
    arr.push(iceCountVal, remainVal);
    console.log(arr);
    return arr;
}