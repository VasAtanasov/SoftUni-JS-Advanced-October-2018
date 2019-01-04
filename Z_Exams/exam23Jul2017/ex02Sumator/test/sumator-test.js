let expect = require('chai').expect;
let Sumator = require('../Sumator').Sumator;

describe('class Sumator test', function () {
    describe('test instantiation', function () {
        it('should instantiate with correct property', function () {
            const sumator = new Sumator();
            expect(sumator.data).not.to.be.undefined;
            expect(sumator.data.length).to.be.equal(0);
            expect(typeof sumator.data).to.be.equal('object');
            expect(sumator.data).to.be.instanceOf(Array);
            sumator.data = {};
            expect(sumator.data).not.to.be.instanceOf(Array);
        });
    });

    describe('test add functionality', function () {
        it('should add any data that is passed to the function', function () {
            const sumator = new Sumator();
            sumator.add({});
            sumator.add(1);
            sumator.add('1');
            expect(JSON.stringify(sumator.data)).to.be.equal('[{},1,"1"]');
            sumator.add("test");
            expect(JSON.stringify(sumator.data)).to.be.equal('[{},1,"1","test"]');
            sumator.add([1, 2, 3]);
            expect(JSON.stringify(sumator.data)).to.be.equal('[{},1,"1","test",[1,2,3]]');
            sumator.add({name: "Pesho"});
            expect(JSON.stringify(sumator.data)).to.be.equal('[{},1,"1","test",[1,2,3],{"name":"Pesho"}]');
        });
    });

    describe('test sumNums functions', function () {
        it('should return correct sum', function () {
            const sumator = new Sumator();
            sumator.add({});
            sumator.add(1);
            sumator.add('1');
            sumator.add(3);
            sumator.add("test");
            sumator.add([1, 2, 3]);
            sumator.add({name: "Pesho"});

            let sum = sumator.sumNums();
            expect(sum).to.be.equal(4);
        });

        it('should return zero with empty array', function () {
            const sumator = new Sumator();
            let sum = sumator.sumNums();
            expect(sum).to.be.equal(0);
        });
    });

    describe('test removeByFilter function', function () {
        let sumator;
        beforeEach(function () {
            sumator = new Sumator();
            sumator.add({});
            sumator.add(1);
            sumator.add('1');
            sumator.add(4);
            sumator.add("test");
            sumator.add([1, 2, 3]);
            sumator.add({name: "Pesho"});
        });

        it('should remove all even numbers', function () {
            sumator.removeByFilter(x => x % 2 === 0);
            expect(JSON.stringify(sumator.data)).to.be.equal('[{},1,"1","test",[1,2,3],{"name":"Pesho"}]');
        });

        it('should remove all even numbers', function () {
            sumator.removeByFilter(x => x % 2 === 1);
            expect(JSON.stringify(sumator.data)).to.be.equal('[{},4,"test",[1,2,3],{"name":"Pesho"}]');
        });

        it('should remove all even numbers', function () {
            sumator.removeByFilter(x => typeof x !== "number");
            expect(JSON.stringify(sumator.data)).to.be.equal('[1,4]');
        });
    });

    describe('test toString()', function () {
        it('should print "(empty) with empty array"', function () {
            const sumator = new Sumator();
            expect(sumator.toString()).to.be.equal('(empty)');
        });

        it('should print all elements in the array separated with coma', function () {
            const sumator = new Sumator();
            sumator.add({});
            sumator.add(1);
            sumator.add('1');
            sumator.add(4);
            expect(sumator.toString()).to.be.equal('[object Object], 1, 1, 4');
        });
    });
});