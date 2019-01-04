function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

let expect = require("chai").expect;
describe('Test rgbToHexColor(red, green, blue) function', function () {
    describe("Normal cases", function () {
        it('should return (255, 158, 170)  #FF9EAA', function () {
            expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
        });

        it('should return (0, 0, 0)  #000000', function () {
            expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
        });

        it('should return (12, 13, 14)  #0C0D0E', function () {
            expect(rgbToHexColor(12, 13, 14)).to.be.equal('#0C0D0E');
        });

        it('should return (255, 255, 255)  #FFFFFF', function () {
            expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
        });
    });

    describe('Special cases', function () {
        it("should return undefined for (-1,0,0)", function () {
            expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        });
        it("should return undefined for (0,-1,0)", function () {
            expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        });
        it("should return undefined for (0,0,-1)", function () {
            expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
        });
        it("should return undefined for (256,0,0)", function () {
            expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        });
        it("should return undefined for (0,256,0)", function () {
            expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        });
        it("should return undefined for (0,0,256)", function () {
            expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
        });
        it("should return undefined for (3.14,0,0)", function () {
            expect(rgbToHexColor(3.14, 0, 0)).to.be.undefined;
        });
        it("should return undefined for (0,3.14,0)", function () {
            expect(rgbToHexColor(0, 3.14, 0)).to.be.undefined;
        });
        it("should return undefined for (0,0,3.14)", function () {
            expect(rgbToHexColor(0, 0, 3.14)).to.be.undefined;
        });
        it('should return undefined for ("5", [3], {8:9})', function () {
            expect(rgbToHexColor("5", [3], {8:9})).to.be.undefined;
        });
        it("should return undefined for empty input", function () {
            expect(rgbToHexColor()).to.be.undefined;
        });
    })
});