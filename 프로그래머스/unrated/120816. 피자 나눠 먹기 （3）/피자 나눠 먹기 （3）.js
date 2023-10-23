const solution = (slice, n) => {
    if(n <= slice || n <= 1) return 1;
    else if(n % slice !== 0) return Math.floor(n / slice) + 1;
    else return n / slice;
}