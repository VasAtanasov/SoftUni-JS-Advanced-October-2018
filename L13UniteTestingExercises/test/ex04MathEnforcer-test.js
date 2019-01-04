let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


let expect = require('chai').expect;


describe('mathEnforcer object test', function () {
    describe('test normal cases for addFive()', function () {
        it('should return correct answer for addFive(5) = 10', function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });

        it('should return correct answer for addFive(-5) = 0', function () {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });

        it('should return correct answer for addFive(0.123) = 5.123', function () {
            expect(mathEnforcer.addFive(0.123)).to.be.closeTo(5.123, 0.01);
        });

        it('should return correct answer for addFive(0.000000003) = 5.000000003', function () {
            expect(mathEnforcer.addFive(0.000000003)).to.be.closeTo(5.000000003, 0.01);
        });

        it('should return correct answer for addFive(-0.22) = 4.78', function () {
            expect(mathEnforcer.addFive(-0.22)).to.be.closeTo(4.78, 0.01);
        });


        it('should return undefined for passing string', function () {
            expect(mathEnforcer.addFive('')).to.be.undefined;
        });

        it('should return undefined for passing no parameters', function () {
            expect(mathEnforcer.addFive()).to.be.undefined;

        });

        it('should return undefined for passing array', function () {
            expect(mathEnforcer.addFive([1, 2, 3])).to.be.undefined;
        });
    });

    describe('test normal cases for subtractTen()', function () {
        it('should return correct answer for subtractTen(5) = -5', function () {
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
        });

        it('should return correct answer for subtractTen(-5) = -15', function () {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });

        it('should return correct answer for subtractTen(0.123) = -9.877', function () {
            expect(mathEnforcer.subtractTen(0.123)).to.be.closeTo(-9.877, 0.01);
        });

        it('should return correct answer for subtractTen(0.000000003) = -9.999999997', function () {
            expect(mathEnforcer.subtractTen(0.000000003)).to.be.closeTo(-9.999999997, 0.01);
        });

        it('should return correct answer for subtractTen(-0.000000003) = -10.000000003', function () {
            expect(mathEnforcer.subtractTen(-0.000000003)).to.be.closeTo(-10.000000003, 0.01);
        });


        it('should return undefined for passing string', function () {
            expect(mathEnforcer.subtractTen('')).to.be.undefined;
        });

        it('should return undefined for passing no parameters', function () {
            expect(mathEnforcer.subtractTen()).to.be.undefined;

        });

        it('should return undefined for passing array', function () {
            expect(mathEnforcer.subtractTen([1, 2, 3])).to.be.undefined;
        });
    });

    describe('test normal cases for sum()', function () {
        it('should return correct answer for sum(1,2) = 3', function () {
            expect(mathEnforcer.sum(1, 2)).to.be.equal(3);
        });

        it('should return correct answer for sum(-5,1) = -4', function () {
            expect(mathEnforcer.sum(-5, 1)).to.be.equal(-4);
        });

        it('should return correct answer for sum(5,-1) = 4', function () {
            expect(mathEnforcer.sum(5, -1)).to.be.equal(4);
        });

        it('should return correct answer for sum(-1,-2) = -3', function () {
            expect(mathEnforcer.sum(-1, -2)).to.be.equal(-3);
        });

        it('should return correct answer for sum(1,0.123) = 1.223', function () {
            expect(mathEnforcer.sum(1.1, 0.123)).to.be.closeTo(1.223, 0.01);
        });

        it('should return correct answer for sum(1,-0.03) = 1.07', function () {
            expect(mathEnforcer.sum(1.1, -0.03)).to.be.closeTo(1.07, 0.01);
        });

        it('should return correct answer for sum(1,-0.000000003) = -1.000000003', function () {
            expect(mathEnforcer.sum(-1.1, -0.000000003)).to.be.closeTo(-1.100000003, 0.01);
        });

        it('should return correct answer for sum(-1,0.22) = -0.88', function () {
            expect(mathEnforcer.sum(-1.1, 0.22)).to.be.closeTo(-0.88, 0.01);
        });

        it('should return undefined for passing string', function () {
            expect(mathEnforcer.sum('', 'asd')).to.be.undefined;
            expect(mathEnforcer.sum(1, 'asd')).to.be.undefined;
            expect(mathEnforcer.sum('', 2)).to.be.undefined;
        });

        it('should return undefined for passing no parameters', function () {
            expect(mathEnforcer.sum()).to.be.undefined;
        });

        it('should return undefined for passing one parameter', function () {
            expect(mathEnforcer.sum(1)).to.be.undefined;
        });

        it('should return undefined for passing array', function () {
            expect(mathEnforcer.sum([1, 2, 3], 1)).to.be.undefined;
        });
    });

});