function solution(num_list) {
    const reduceNum = num_list.reduce((acc, curr) => acc + curr, 0);
    const squareNum = reduceNum * reduceNum;
    const multiplyNum = num_list.reduce((acc, curr) => acc * curr, 1);
    console.log(reduceNum, squareNum, multiplyNum)
    if(squareNum > multiplyNum) {
        return 1;
    } else {
        return 0;
    }
}