// last 마지막 원소 num_list[num_list.length - 1]
// before 마지막 전 원소 num_list[num_list.length - 2]
// 1) last > (last - before) --> last - before push
// 2) last < (last - before) --> last * 2 push

const solution = (num_list) => {
    let last = num_list[num_list.length - 1];
    let before = num_list[num_list.length - 2];
    
    last > before ? num_list.push(last - before) : num_list.push(last * 2)
    
    return num_list;
}