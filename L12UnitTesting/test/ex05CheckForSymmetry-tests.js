let expect = require("chai").expect;

function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    return (JSON.stringify(arr) === JSON.stringify(reversed));
}

describe('symmetry check', function () {
    it('should return false if not array', function () {
        let arr = 'not array';
        let result= isSymmetric(arr);
        expect(result).to.be.false;
    });

    it('should return true for symmetry', function () {
        let array = [1,2,3,2,1];
        let result = isSymmetric(array);
        expect(result).to.be.true;
    });

    it('should return false if not symmetric', function () {
        let array = [1,2,3,3,1];
        let result = isSymmetric(array);
        expect(result).to.be.false;
    });

    it('should return true for empty array', function () {
        let array = [];
        let result = isSymmetric(array);
        expect(result).to.be.true;
    });

    it('should return false for number', function () {
        let array = 1;
        let result = isSymmetric(array);
        expect(result).to.be.false;
    });

    it("should return false for [5,'hi',{a:5},new Date(),{X:5},'hi',5]", function() {
        let symmetric = isSymmetric([5, 'hi', { a: 5 }, new Date(), { X: 5 }, 'hi', 5]);
        expect(symmetric).to.be.false;
    });

    it("should return false for [5,'hi',{a:5},new Date(),{X:5},'hi',5]", function() {
        let symmetric = isSymmetric([5, 'hi', { a: 5 }, new Date(), { a: 5 }, 'hi', 5]);
        expect(symmetric).to.be.true;
    });

});