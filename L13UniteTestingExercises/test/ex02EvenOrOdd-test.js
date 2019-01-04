function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

let expect = require("chai").expect;
describe("Test isOddOrEven(string)",function () {

    describe("undefined",function () {
        it('should return undefined for array', function () {
            expect(isOddOrEven([1,2,3])).to.be.undefined;
        });

        it('should return undefined for number', function () {
            expect(isOddOrEven(1)).to.be.undefined;
        });

        it('should return undefined for object', function () {
            expect(isOddOrEven(new Date())).to.be.undefined;
        });
    });

    describe('odd',function () {
        it('should return odd', function () {
            expect(isOddOrEven('abcde')).to.be.equal('odd');
        });

        it('should return odd', function () {
            expect(isOddOrEven('a')).to.be.equal('odd');
        });
    });

    describe('even',function () {
        it('should return even', function () {
            expect(isOddOrEven('abcded')).to.be.equal('even');
        });

        it('should return even', function () {
            expect(isOddOrEven('ab')).to.be.equal('even');
        });

        it('should return even', function () {
            expect(isOddOrEven('')).to.be.equal('even');
        });
    })

});