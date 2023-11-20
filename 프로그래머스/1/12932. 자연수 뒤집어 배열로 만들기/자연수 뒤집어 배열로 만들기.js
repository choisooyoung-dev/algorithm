const solution = (n) => {
   let str = n.toString();
    let result = [...str]
   return result.reverse().map(Number);
}