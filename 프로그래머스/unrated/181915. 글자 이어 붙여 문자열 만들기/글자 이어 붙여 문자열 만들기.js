const solution = (my_string, index_list) => {
    let newArr = [];
    index_list.forEach(i => {
        newArr.push(my_string[i]);
    });
    
    return newArr.join('')
}