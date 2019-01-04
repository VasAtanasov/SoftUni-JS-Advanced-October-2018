function euclidsAlgorithm(a, b) {
    [a, b] = [a, b].map(Number);
    while (Math.min(a, b) !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a; // greatest common divisor
}

