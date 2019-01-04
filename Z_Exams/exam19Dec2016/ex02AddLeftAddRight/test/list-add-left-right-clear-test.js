let expect = require('chai').expect;
let makeList = require('../list-add-left-right-clear');


describe("makeList function", function () {

    describe('test instantiation', function () {
        let myList = {};
        beforeEach(function () {
            myList = makeList();
        });

        it("should be successfully instantiated", function () {
            let keys = Object.keys(myList);
            expect(keys.length).to.be.equal(4);
        });

        it('should have all properties', function () {
            expect(myList.hasOwnProperty("addLeft")).to.be.true;
            expect(myList.hasOwnProperty("addRight")).to.be.true;
            expect(myList.hasOwnProperty("clear")).to.be.true;
            expect(myList.hasOwnProperty("toString")).to.be.true;
        });

        it('should not be able to access property - data', function () {
            expect(myList.data).to.be.undefined
        });
    });

    describe('test addLeft function', function () {
        it('should add to the begging of the array', function () {
            let list = makeList();
            list.addLeft('1');
            list.addLeft('test');
            list.addLeft([1, 2, 3]);
            expect(list.toString()).to.be.eq('1,2,3, test, 1');
            list.addLeft(null);

            list.addLeft(null);
            expect(list.toString()).to.be.eq(', , 1,2,3, test, 1');
        });
    });

    describe('test addRight function', function () {
        it('should add to the end of the array', function () {
            let list = makeList();
            list.addRight('1');
            list.addRight('test');
            list.addRight([1, 2, 3]);
            expect(list.toString()).to.be.eq('1, test, 1,2,3');
            list.addRight(null);

            list.addRight(null);
            expect(list.toString()).to.be.eq('1, test, 1,2,3, , ');
        });
    });

    describe('test clear function',function () {
        let list;
        beforeEach(function () {
            list = makeList();
            list.addRight('1');
            list.addRight('test');
            list.addRight([1, 2, 3]);
        });

        it('should clear all data', function () {
            list.clear();
            expect(list.toString()).to.be.equal('');
        });

        it('should clear all data and adds new one', function () {
            list.clear();
            list.addLeft(1);
            list.addRight(2);
            expect(list.toString()).to.be.equal('1, 2');
        });
    })

});