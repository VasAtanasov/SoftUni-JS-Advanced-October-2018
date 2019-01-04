let expect = require('chai').expect;
let Calculator = require('../Calculator');


describe('class Calculator test', function () {

    describe('test initializations', function () {
        let calc;
        beforeEach(function () {
            calc = new Calculator();
        });

        it('should have property expenses', function () {
            expect(calc.hasOwnProperty('expenses')).to.be.true;
        });

        it('should have property expense of type Array', function () {
            expect(Object.getPrototypeOf(calc.expenses)).to.be.equal(Array.prototype);
        });

        it('should have empty Array', function () {
            expect(calc.expenses.length).to.be.equal(0);
        });
    });

    describe('test add(data) Function', function () {
        let calc;
        beforeEach(function () {
            calc = new Calculator();
        });

        it('should add item to the end of the array', function () {
            calc.add(1);
            calc.add([2, 3]);
            calc.add('Pesho');
            expect(JSON.stringify(calc.expenses)).to.be.equal('[1,[2,3],"Pesho"]');
        });
    });

    describe('test divideNums()', function () {
        it('should divide correctly array which contains numbers', function () {
            let calc = new Calculator();
            calc.add(1);
            calc.add([2, 3]);
            calc.add(10);
            calc.add('Pesho');
            calc.add(5);
            let result = calc.divideNums();
            expect(result).to.be.equal(0.02);
        });

        it('should print message "Cannot divide by zero"', function () {
            let calc = new Calculator();
            calc.add(5);
            calc.add([2, 3]);
            calc.add('Pesho');
            calc.add(0);
            let result = calc.divideNums();
            expect(result).to.be.equal("Cannot divide by zero");
        });

        it('should throw error for array with no numbers', function () {
            let calc = new Calculator();
            calc.add([2, 3]);
            calc.add('Pesho');
            expect(function () {
                calc.divideNums();
            }).to.throw(Error, 'There are no numbers in the array!');
        });
    });

    describe('test toString() function', function () {
        it('should print non empty array', function () {
            let calc = new Calculator();
            calc.add(5);
            calc.add([2, 3]);
            calc.add('Pesho');
            expect(calc.toString()).to.be.equal('5 -> 2,3 -> Pesho');
        });

        it('should print "empty array"', function () {
            let calc = new Calculator();
            expect(calc.toString()).to.be.equal('empty array');
        });
        
    });

    describe('test orderBy() function', function () {
        it('should return empty', function () {
            let calc = new Calculator();
            expect(calc.orderBy()).to.be.equal('empty');
        });

        it('should sort mix data', function () {
            let calc = new Calculator();
            calc.add(5);
            calc.add([2, 3]);
            calc.add('Pesho');
            expect(calc.orderBy()).to.be.equal("2,3, 5, Pesho");
        });

        it('should sort numbers data', function () {
            let calc = new Calculator();
            calc.add(5);
            calc.add(-1);
            calc.add(2);
            expect(calc.orderBy()).to.be.equal("-1, 2, 5");
        });

        it('should sort non-number data', function () {
            let calc = new Calculator();
            calc.add("Pesho");
            calc.add("Gosho");
            calc.add("Tako");
            expect(calc.orderBy()).to.be.equal("Gosho, Pesho, Tako");
        });
    });
});