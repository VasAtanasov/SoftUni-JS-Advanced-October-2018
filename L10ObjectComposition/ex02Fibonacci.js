function getFibonator() {
    let fibSeq = [0, 1];
    return function () {
        let fib = fibSeq[fibSeq.length- 1];
        let next = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
        fibSeq.push(next);
        return fib;
    }
}

let fib = getFibonator();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
