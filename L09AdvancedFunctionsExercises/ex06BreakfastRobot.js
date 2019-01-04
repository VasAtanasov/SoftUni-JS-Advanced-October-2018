let solution = function () {
    let microElements = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0};

    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    let commands = {
        restock,
        prepare,
        report
    };

    function restock(m, q) {
        microElements[m] += q;
        return 'Success';
    }

    function prepare(recipe, quantity) {
        let recipeIngredients = recipes[recipe];
        for (const element in recipeIngredients) {
            if (recipeIngredients.hasOwnProperty(element)) {
                let amountNeeded = recipeIngredients[element] * quantity;
                let currentAmount = microElements[element];
                if (amountNeeded > currentAmount) {
                    return `Error: not enough ${element} in stock`;
                }
            }
        }

        for (const element in recipeIngredients) {
            if (recipeIngredients.hasOwnProperty(element)) {
                microElements[element] -= recipeIngredients[element] * quantity;
            }
        }
        return 'Success';
    }

    function report() {
        return Object.keys(microElements)
            .map(key => `${key}=${microElements[key]}`)
            .join(' ');
    }

    return function (input) {
        let [command, microElement, quantity] = input.split(/\s+/);
        return commands[command](microElement, Number(quantity));
    };
};

let manager = solution();

console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));


// console.log(manager("prepare cheverme 1"));
// console.log(manager("restock protein 10"));
// console.log(manager("prepare cheverme 1"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("prepare cheverme 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare cheverme 1"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare cheverme 1"));
// console.log(manager("report"));


