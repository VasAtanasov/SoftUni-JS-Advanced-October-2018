function sum(arr) {
    let sum = 0;
    for (let num of arr)
        sum += Number(num);
    return sum;
}


console.log(sum([0,123,4,5,7,-1]));