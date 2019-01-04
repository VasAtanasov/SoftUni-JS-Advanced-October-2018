function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

let expect = require('chai').expect;

describe("lookupChar(string, index) Test",function () {
    describe('test undefined results',function () {
        it('should return undefined for array', function () {
            expect(lookupChar([1,2,3],1)).to.be.undefined;
        });

        it('should return undefined for invalid index type', function () {
            expect(lookupChar('abv','a')).to.be.undefined;
        });

        it('should return undefined for invalid index type(float)', function () {
            expect(lookupChar('abv',0.2)).to.be.undefined;
        });

        it('should return undefined for missing parameters', function () {
            expect(lookupChar()).to.be.undefined;
        });

        it('should return undefined for missing parameters', function () {
            expect(lookupChar()).to.be.undefined;
        });
    });
    
    describe('test for incorrect index',function () {
        it('should return Incorrect index for negative index', function () {
            expect(lookupChar('hello',-1)).to.be.equal("Incorrect index",
                'The function did not return the correct result!');
        });

        it('should return Incorrect index for invalid index', function () {
            expect(lookupChar('',10)).to.be.equal("Incorrect index");
        });

        it('should return Incorrect index for invalid index', function () {
            expect(lookupChar('hello',10)).to.be.equal("Incorrect index");
        });
    });

    describe('test for Normal cases',function () {
        it('should return \'e\' for \'hello\' at index 1', function () {
            expect(lookupChar('hello',1)).to.be.equal("e");
        });

        it('should return \'o\' for \'hello\' at index 4', function () {
            expect(lookupChar('hello',4)).to.be.equal("o");
        });

        it('should return \'h\' for \'hello\' at index 0', function () {
            expect(lookupChar('hello',0)).to.be.equal("h");
        });
    });
});