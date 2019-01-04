function solve(...elements) {
    let countTypes = new Map();

    for (const element of elements) {
        let type = typeof element;

        console.log(`${type}: ${element}`);

        if (!countTypes.has(type)) {
            countTypes.set(type, 0);
        }

        countTypes.set(type, countTypes.get(type) + 1);
    }

    [...countTypes.keys()]
        .sort((a, b) => countTypes.get(b) - countTypes.get(a))
        .forEach(type => console.log(`${type} = ${countTypes.get(type)}`));
}

solve('cat', 42, function () {
    console.log('Hello world!');
});
console.log();
solve({name: 'bob'}, 3.333, 9.999);
console.log();
solve(42, 'cat', [], undefined);