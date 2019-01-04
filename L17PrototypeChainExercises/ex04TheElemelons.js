function classes() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this.element = this.constructor.name.replace('melon', '');
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon {

    }

    class Firemelon extends Melon {

    }

    class Earthmelon extends Melon {

    }

    class Airmelon extends Melon {

    }

    class Melolemonmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elements = ['Water', 'Fire', 'Earth', 'Air',];
            this.morph();
        }

        morph() {
            let elm = this.elements.shift();
            this.element = elm;
            this.elements.push(elm);
        }
    }

    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon};
}

let c = classes();
let Watermelon = c.Watermelon;
let Melolemonmelon = c.Melolemonmelon;

let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
console.log();
let test = new Melolemonmelon(150, "Melo");
test.morph();
test.morph();
console.log(test.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100
