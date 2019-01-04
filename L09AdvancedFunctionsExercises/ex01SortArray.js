function solve(array, sortMethod) {
    let sort = {
        'asc': (array) => array.sort((a, b) => a - b),
        'desc': (array) => array.sort((a, b) => b - a)
    };

    return sort[sortMethod](array);
}

function solve01(array, sortMethod) {
    let sortingStrategies = {
        'asc': ascendingSort,
        'desc': descendingSort
    };


    function ascendingSort(a, b) {
        return a - b;
    }

    function descendingSort(a, b) {
        return b - a;
    }

    return array.sort(sortingStrategies[sortMethod]);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log();
console.log(solve([14, 7, 17, 6, 8], 'desc'));
console.log();
console.log(solve01([14, 7, 17, 6, 8], 'asc'));
console.log();
console.log(solve01([14, 7, 17, 6, 8], 'desc'));