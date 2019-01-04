let Warehouse = require('../Warehouse.js');
let expect = require('chai').expect;

describe('Warehouse class test', function () {

    describe('test initialization', function () {
        it('should have correct capacity', function () {
            let warehouse = new Warehouse(5);
            expect(warehouse.capacity).to.be.equal(5);
        });

        it('should throw error on negative capacity', function () {
            expect(function () {
                let warehouse = new Warehouse(-1);
            }).to.throw('Invalid given warehouse space')
        });

        it('should throw error on zero capacity', function () {
            expect(function () {
                let warehouse = new Warehouse(0);
            }).to.throw('Invalid given warehouse space')
        });

        it('should throw error on zero capacity', function () {
            expect(function () {
                let warehouse = new Warehouse("1");
            }).to.throw('Invalid given warehouse space')
        });

        it('should throw error on not a number', function () {
            expect(function () {
                let warehouse = new Warehouse("ddsfs");
            }).to.throw('Invalid given warehouse space')
        });
    });

    describe('addProduct(type, product, quantity)  method test', function () {

        it('should add product', function () {
            let warehouse = new Warehouse(5);
            warehouse.addProduct("Food", "banana", 4);
            warehouse.addProduct("Food", "apple", 1);

            expect(Object.keys(warehouse.availableProducts["Food"]).length).to.be.equal(2);
        });

        it('should throw error on not enough capacity', function () {
            expect(function () {
                let warehouse = new Warehouse(5);
                warehouse.addProduct("Food", "banana", 10);
            }).to.throw('There is not enough space or the warehouse is already full');
        });

        it('should throw error on not correct type', function () {
            expect(function () {
                let warehouse = new Warehouse(5);
                warehouse.addProduct("food", "banana", 3);
            }).to.throw(TypeError, "Cannot read property 'hasOwnProperty' of undefined");
        });
    });

    describe('orderProducts(type) method test', function () {
        let warehouse;
        beforeEach(function () {
            warehouse = new Warehouse(5);
            warehouse.addProduct("Food", "banana", 4);
            warehouse.addProduct("Food", "apple", 1);
        });

        it('throw error for non existing type', function () {
            expect(function () {
                warehouse.orderProducts('food')
            }).to.throw(TypeError, 'Cannot convert undefined or null to object');
        });

        it('should sort products', function () {
            expect(JSON.stringify(warehouse.orderProducts('Food'))).to.be
                .equal('{"banana":4,"apple":1}');
        });
    });

    describe('occupiedCapacity() method test', function () {
        let warehouse;
        beforeEach(function () {
            warehouse = new Warehouse(5);

        });

        it('should return correct capacity', function () {
            expect(warehouse.occupiedCapacity()).to.be.equal(0);
        });

        it('should return correct capacity', function () {
            warehouse.addProduct("Food", "banana", 4);
            warehouse.addProduct("Food", "apple", 1);
            expect(warehouse.occupiedCapacity()).to.be.equal(5);
        });
    });

    describe('scrapeAProduct(product, quantity) method test', function () {
        let warehouse;
        beforeEach(function () {
            warehouse = new Warehouse(5);
            warehouse.addProduct("Food", "banana", 4);
            warehouse.addProduct("Food", "apple", 1);
        });

        it('throw error for non existing type', function () {
            expect(function () {
                warehouse.scrapeAProduct('tomato', 1)
            }).to.throw('tomato do not exists');
        });

        it('throw give correct result for less than available quantity', function () {
            expect(JSON.stringify(warehouse.scrapeAProduct('banana', 3))).to.be.equal('{"banana":1,"apple":1}');
        });

        it('throw give 0 for more than available quantity', function () {
            expect(JSON.stringify(warehouse.scrapeAProduct('banana', 5))).to.be.equal('{"banana":0,"apple":1}');
        });
    });

    describe('revision() method test', function () {
        let warehouse;
        beforeEach(function () {
            warehouse = new Warehouse(5);
        });

        it('should give correct message for empty warehouse', function () {
            expect(warehouse.revision()).to.be.equal("The warehouse is empty")
        });

        it('should ', function () {
            warehouse.addProduct("Food", "banana", 4);
            warehouse.addProduct("Food", "apple", 1);
            expect(warehouse.revision()).to.be.equal("Product type - [Food]\n- banana 4\n- apple 1\nProduct type - [Drink]");
        });

    });
});