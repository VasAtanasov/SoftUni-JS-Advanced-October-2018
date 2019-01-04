let expect = require('chai').expect;
let createList = require('./../list-add-swap-shift-left-right').createList;

describe('list() functionality tests', function () {
    let list;
    beforeEach(function () {
        list = createList();
    });

    describe('list.add() test', function () {
        it('should have the following elements [1, 2, 3, abc]', function () {
            let obj = {name: "gosho"};
            list.add(1);
            list.add(2);
            list.add(3);
            list.add('abc');
            list.add(obj);
            expect(list.toString()).to.be.equal('1, 2, 3, abc, [object Object]');
        });
    });

    describe('list.toString() test', function () {
        it('should have the following elements [1, 2, 3, abc]', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add('abc');
            expect(list.toString()).to.be.equal('1, 2, 3, abc');
        });

        it('should return empty string', function () {
            expect(list.toString()).to.be.empty;
        });
    });

    describe('list.shiftLeft() test', function () {
        it('should shift left one time to following output [2, 3, abc, 1]', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add('abc');
            list.shiftLeft();
            expect(list.toString()).to.be.equal('2, 3, abc, 1')
        });

        it('should shift left two more time to following output [abc, 1, 2, 3]', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add('abc');
            list.shiftLeft();
            list.shiftLeft();
            expect(list.toString()).to.be.equal('3, abc, 1, 2')
        });
    });

    describe('list.shiftRight() test', function () {
        it('should shift right one time to following output [abc, 1, 2, 3]', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add('abc');
            list.shiftRight();
            expect(list.toString()).to.be.equal('abc, 1, 2, 3')
        });

        it('should shift left two more time to following output [3, abc, 1, 2]', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.add('abc');
            list.shiftRight();
            list.shiftRight();
            expect(list.toString()).to.be.equal('3, abc, 1, 2')
        });

        it('should not shift with one element in the array', function () {
            list.add(1);
            list.shiftRight();
            expect(list.toString()).to.be.equal('1');
            list.shiftLeft();
            expect(list.toString()).to.be.equal('1');
        });
    });

    describe('list.swap(index1,index2) test', function () {
        describe('false cases of swap function', function () {
            it('should return false for invalid index1', function () {
                list.add(1);
                list.add(2);
                list.add(3);
                list.add('abc');
                expect(list.swap('1', 3), 'test for invalid index1 did not pass correctly').to.be.false;
            });

            it('should return false for negative index1', function () {
                list.add(1);
                list.add(2);
                list.add(3);
                list.add('abc');
                expect(list.swap(-1, 2), 'test for negative index1 did not pass correctly').to.be.false;
            });

            it('should return false for out of bound index1', function () {
                list.add(1);
                list.add(2);
                list.add(3);
                list.add('abc');
                expect(list.swap(10, 2), 'test for out of bound index1 did not pass correctly').to.be.false;
            });

            it('should return false for invalid index2', function () {
                list.add(1);
                list.add(2);
                list.add(3);
                list.add('abc');
                expect(list.swap(1, 'index2'), 'test for invalid index2 did not pass correctly').to.be.false;
            });

            it('should not change collection with first index equla to length', function () {
                list.add(1);
                list.add(2);
                list.add(3);
                list.add('abc');
                list.swap(4, 0);
                expect(list.toString()).to.be.eq('1, 2, 3, abc')
            });

            it('with a non integer second index, should not change the collection', function () {
                list.add('one');
                list.add('two');
                list.swap(0, [4, 13]);
                expect(list.toString()).to.equal("one, two");
            });

            it('should return false for negative index2', function () {
                list.add(1);
                list.add(2);
                list.add(3);
                list.add('abc');
                expect(list.swap(1, -2), 'test for negative index2 did not pass correctly').to.be.false;
            });

            it('should return false for out of bound index2', function () {
                list.add(1);
                list.add(2);
                list.add(3);
                list.add('abc');
                expect(list.swap(2, 10), 'test for out of bound index2 did not pass correctly').to.be.false;
            });

            it('should return false for equal index1 and index2', function () {
                list.add(1);
                list.add(2);
                list.add(3);
                list.add('abc');
                expect(list.swap(1, 1), 'test for equal index1 and index 2 did not pass correctly').to.be.false;
            });

            it('should return false for invalid index1 and index2', function () {
                list.add(1);
                list.add(2);
                list.add(3);
                list.add('abc');
                expect(list.swap('index1', 'index2'), 'test for invalid index1 and index2 did not pass correctly').to.be.false;
            });

            it('should return false for negative index1 and index2', function () {
                list.add(1);
                list.add(2);
                list.add(3);
                list.add('abc');
                expect(list.swap(-1, -2), 'test for negative index1 and index 2 did not pass correctly').to.be.false;
            });

            it('should return false for out of bound index1 and index2', function () {
                list.add(1);
                list.add(2);
                list.add(3);
                list.add('abc');
                expect(list.swap(10, 10), 'test for out of bound index1 and index2 did not pass correctly').to.be.false;
            });

            it('should return false for non-integer index1', function () {
                list.add(1);
                list.add(2);
                list.add(3);
                list.add('abc');
                expect(list.swap(2.1, 2), 'test for non-integer index1 did not pass correctly').to.be.false;
            });

            it('should return false for non-integer index2', function () {
                list.add(1);
                list.add(2);
                list.add(3);
                list.add('abc');
                expect(list.swap(2, 3.4), 'test for non-integer index2 did not pass correctly').to.be.false;
            });
        });

        describe('true cases of swap function', function () {
            it('should return true for valid indexes', function () {
                list.add(1);
                list.add(2);
                list.add(3);
                list.add('abc');
                expect(list.swap(0, 3), 'swap should return true').to.be.true;
            });

            it('should return true for valid indexes', function () {
                list.add(1);
                list.add(2);
                list.add(3);
                list.add('abc');
                expect(list.swap(1, 2), 'swap should return true').to.be.true;
            });
        })
    })
});