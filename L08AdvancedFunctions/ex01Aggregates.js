function solve(array) {
    console.log(`Sum = ${array.reduce((a, b) => a + b)}`);
    console.log(`Min = ${array.reduce((a, b) => Math.min(a, b))}`);
    console.log(`Max = ${array.reduce((a, b) => Math.max(a, b))}`);
    console.log(`Product = ${array.reduce((a, b) => a * b)}`);
    console.log(`Join = ${array.reduce((a, b) => '' + a + b)}`);
}

solve([5, -3, 20, 7, 0.5]);
console.log();
solve([2, 3, 10, 5]);