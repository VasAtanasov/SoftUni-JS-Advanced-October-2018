let expect = require('chai').expect;
let StringBuilder = require('../string-builder').StringBuilder;

describe('class StringBuilder test', function () {
    describe('test instantiation', function () {
        it('should be successfully instantiated with string', function () {
            const sb = new StringBuilder('test');
            expect(sb._stringArray.length).to.be.equal(4);
        });

        it('should be successfully instantiated with string', function () {
            const sb = new StringBuilder('test');
            expect(JSON.stringify(sb._stringArray)).to.be.equal('["t","e","s","t"]');
        });

        it('should be successfully instantiated without parameter', function () {
            const sb = new StringBuilder();
            expect(sb._stringArray.length).to.be.equal(0);
        });

        it('should not be instantiated with different than a string parameter', function () {
            expect(function () {
                const sb = new StringBuilder(2);
            }).to.throw(TypeError, 'Argument must be string')
        });

        it('should not be instantiated with different than a string parameter', function () {
            expect(function () {
                const sb = new StringBuilder({});
            }).to.throw(TypeError, 'Argument must be string')
        });

        it('should not be instantiated with different than a string parameter', function () {
            expect(function () {
                const sb = new StringBuilder(['asd']);
            }).to.throw(TypeError, 'Argument must be string')
        });
    });

    describe('test append functionality', function () {
        let sb;
        beforeEach(function () {
            sb = new StringBuilder('test');
        });

        it('should append passed string argument to the end of the array', function () {
            sb.append('1');
            expect(JSON.stringify(sb._stringArray)).to.be.equal('["t","e","s","t","1"]');
        });

        it('should throw error without parameter', function () {
            expect(function () {
                sb.append();
            }).to.throw(TypeError, 'Argument must be string')
        });

        it('should throw error for non string parameter', function () {
            expect(function () {
                sb.append(1);
            }).to.throw(TypeError, 'Argument must be string')
        });

        it('should throw error for non string parameter', function () {
            expect(function () {
                sb.append([]);
            }).to.throw(TypeError, 'Argument must be string')
        });
    });

    describe('test prepend functionality', function () {
        let sb;
        beforeEach(function () {
            sb = new StringBuilder('test');
        });

        it('should append passed string argument to the start of the array', function () {
            sb.prepend('1');
            expect(JSON.stringify(sb._stringArray)).to.be.equal('["1","t","e","s","t"]');
        });

        it('should append passed string argument to the start of the array', function () {
            sb.prepend('123');
            expect(JSON.stringify(sb._stringArray)).to.be.equal('["1","2","3","t","e","s","t"]');
        });

        it('should throw error without parameter', function () {
            expect(function () {
                sb.prepend();
            }).to.throw(TypeError, 'Argument must be string')
        });

        it('should throw error for non string parameter', function () {
            expect(function () {
                sb.prepend(1);
            }).to.throw(TypeError, 'Argument must be string')
        });

        it('should throw error for non string parameter', function () {
            expect(function () {
                sb.prepend([]);
            }).to.throw(TypeError, 'Argument must be string')
        });
    });

    describe('test insertAt functionality', function () {
        let sb;
        beforeEach(function () {
            sb = new StringBuilder('test');
        });

        it('should insert string at given index', function () {
            sb.insertAt('1', 0);
            expect(JSON.stringify(sb._stringArray)).to.be.equal('["1","t","e","s","t"]');
        });

        it('should insert string at the end of the array', function () {
            sb.insertAt('d1', 10);
            expect(JSON.stringify(sb._stringArray)).to.be.equal('["t","e","s","t","d","1"]');
        });

        it('should insert string at the end of the array', function () {
            sb.insertAt('d1', -10);
            expect(JSON.stringify(sb._stringArray)).to.be.equal('["d","1","t","e","s","t"]');
        });

        it('should insert string at given index', function () {
            sb.insertAt('1', 4);
            expect(JSON.stringify(sb._stringArray)).to.be.equal('["t","e","s","t","1"]');
        });

        it('should throw error for non string parameter', function () {
            expect(function () {
                sb.insertAt(123, 3);
            }).to.throw(TypeError, 'Argument must be string')
        });

        it('should throw error for missing index', function () {
            expect(function () {
                sb.insertAt(123);
            }).to.throw(TypeError, 'Argument must be string');
        });

        it('should prepend for missing index', function () {
            sb.insertAt('1');
            expect(JSON.stringify(sb._stringArray)).to.be.equal('["1","t","e","s","t"]');
        });

        it('should prepend for missing arguments', function () {
            expect(function () {
                sb.insertAt();
            }).to.throw(TypeError, 'Argument must be string');
        });

    });

    describe('test remove functionality', function () {
        let sb;
        beforeEach(function () {
            sb = new StringBuilder('test');
        });

        it('should remove correctly', function () {
            sb.remove(0,4);
            expect(JSON.stringify(sb._stringArray)).to.be.equal('[]');
        });

        it('should remove correctly', function () {
            sb.remove(3,4);
            expect(JSON.stringify(sb._stringArray)).to.be.equal('["t","e","s"]');
        });

        it('should not do anything with one parameter', function () {
            sb.remove(4);
            expect(JSON.stringify(sb._stringArray)).to.be.equal('["t","e","s","t"]');
        });

        it('should not do anything with no parameters', function () {
            sb.remove();
            expect(JSON.stringify(sb._stringArray)).to.be.equal('["t","e","s","t"]');
        });

        it('should not do anything with different than a number parameters', function () {
            sb.remove("1");
            expect(JSON.stringify(sb._stringArray)).to.be.equal('["t","e","s","t"]');
        });

        it('should not do anything with different than a number parameters', function () {
            sb.remove([]);
            expect(JSON.stringify(sb._stringArray)).to.be.equal('["t","e","s","t"]');
        });
    });

    describe('test toString functionality', function () {

        it('should return correct string', function () {
            const sb = new StringBuilder('test');
            expect(sb.toString()).to.be.equal('test');
        });

        it('should return correct string', function () {
            const sb = new StringBuilder('test');
            sb.append('1');
            sb.prepend('1');
            expect(sb.toString()).to.be.equal('1test1');
        });

        it('should return correct string', function () {
            const sb = new StringBuilder('test');
            sb.remove(0,4);
            expect(sb.toString()).to.be.equal('');
        });

        it('should return correct string', function () {
            const sb = new StringBuilder('test');
            sb.insertAt('0',4);
            expect(sb.toString()).to.be.equal('test0');
        });

    });

    describe('test _vrfyParam functionality', function () {
        it('should not throw error for non string parameter', function () {
            expect(function () {
              StringBuilder._vrfyParam();
            }).to.throw(TypeError, 'Argument must be string');
        });

        it('should not do anything for string parameter', function () {
            expect(function () {
                StringBuilder._vrfyParam(1);
            }).to.throw(TypeError, 'Argument must be string');
        });

    });

});
