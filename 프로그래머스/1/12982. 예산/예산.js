function solution(d, budget) {
    d.sort((a, b) => a - b);
    
    let totalSpent = 0;
    let count = 0;

    for (let i = 0; i < d.length; i++) {
        totalSpent += d[i];        
        if (totalSpent > budget) {
            break;
        }        
        count++;
    }
    
    return count;
}
