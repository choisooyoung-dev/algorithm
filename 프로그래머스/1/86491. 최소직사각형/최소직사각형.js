function solution(sizes) {
   var biggerSideMax = 0;
var smallerSideMax = 0;
var biggerArr = [];
var smallerArr = [];

for (let i = 0; i < sizes.length; i++) {
  if (sizes[i][0] >= sizes[i][1]) {
    biggerArr.push(sizes[i][0]);
    smallerArr.push(sizes[i][1]);
  } else {
    biggerArr.push(sizes[i][1]);
    smallerArr.push(sizes[i][0]);
  }
}

biggerSideMax = Math.max(...biggerArr);
smallerSideMax = Math.max(...smallerArr);

console.log(biggerSideMax * smallerSideMax);
    
    for(let i=0; i<biggerArr.length; i++) {
        if(biggerArr[i] >= biggerArr[0]) {
            biggerArr[0] = biggerArr[i];
        }
        biggerSideMax = biggerArr[0];
    }
    
    
    
    for(let i=0; i<smallerArr.length; i++) {
        if(smallerArr[i] >= smallerArr[0]) {
            smallerArr[0] = smallerArr[i];
        }
        smallerSideMax = smallerArr[0];
    }
    
    
    return biggerSideMax * smallerSideMax;
}