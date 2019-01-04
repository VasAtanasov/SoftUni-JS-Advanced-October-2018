class Stringer {
    constructor(initSting, length) {
        this.innerString = initSting;
        this.original = initSting;
        this.innerLength = length;
    }

    increase(length) {
        if (typeof length === "number") {
            this.innerLength = this.innerLength + length < 0 ? 0 : this.innerLength + length;
        }
    }

    decrease(length) {
        if (typeof length === "number") {
            this.innerLength = this.innerLength - length < 0 ? 0 : this.innerLength - length;
        }
    }

    toString() {
        return this.innerString.slice(0, this.innerLength) + '...';
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
