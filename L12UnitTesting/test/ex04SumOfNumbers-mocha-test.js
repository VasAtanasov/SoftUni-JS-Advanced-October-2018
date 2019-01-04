let expect = require("chai").expect;

function sum(arr) {
    let sum = 0;
    for (let num of arr)
        sum += Number(num);
    return sum;
}

describe("sum function tests", function () {
    it("Should return sum([1, 2])  3", function () {
        // Arrange
        let array = [1, 2];
        // Act
        let result = sum(array);
        // Assert
        expect(result).to.be.equal(3);
    });

    it("Should return sum([1])  1", function () {
        // Arrange
        let array = [1];
        // Act
        let result = sum(array);
        // Assert
        expect(result).to.be.equal(1);
    });

    it("Should return sum([1.5, 2.5, -1])  3", function () {
        // Arrange
        let array = [1.5, 2.5, -1];
        // Act
        let result = sum(array);
        // Assert
        expect(result).to.be.equal(3);
    });

    it("Should return sum([1.5, 2.5, -1])  3", function () {
        // Arrange
        let array = [1.5, 2.5, -1];
        // Act
        let result = sum(array);
        // Assert
        expect(result).to.be.equal(3);
    });

    it("Should return sum(\"invalid data\")  NaN", function () {
        // Arrange
        let array = "invalid data";
        // Act
        let result = sum(array);
        // Assert
        expect(result).to.be.NaN;
    })
});