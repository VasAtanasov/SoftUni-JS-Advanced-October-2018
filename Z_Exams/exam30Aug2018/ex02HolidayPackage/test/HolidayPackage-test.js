let expect = require('chai').expect;
let HolidayPackage = require('./../HolidayPackage');

describe('HolidayPackage class test', function () {


    describe('test normal cases', function () {
        let holidayPackage;
        beforeEach(function () {
            holidayPackage = new HolidayPackage('Italy', 'Summer');
        });

        it('should be instantiated with two parameters – a string destination and a string season.', function () {
            expect(holidayPackage.destination).to.be.equal('Italy');
            expect(holidayPackage.season).to.be.equal('Summer');
        });

        it('should be instantiated with two parameters – a string destination and a string season.', function () {
            expect(typeof holidayPackage.destination).to.be.equal('string');
            expect(typeof holidayPackage.season).to.be.equal('string');
        });

        it('should have "false" as insuranceInclude', function () {
            expect(holidayPackage.insuranceIncluded).to.be.false;
        });

        it('should have "true" as insuranceInclude', function () {
            holidayPackage.insuranceIncluded = true;
            expect(holidayPackage.insuranceIncluded).to.be.true;
        });

        it('should have no vacationers', function () {
            expect(holidayPackage.showVacationers()).to.be.equal("No vacationers are added yet");
        });

        it('should return vacationers string', function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
            expect(holidayPackage.showVacationers()).to.be.equal('Vacationers:\n' +
                'Ivan Ivanov\n' +
                'Petar Petrov\n' +
                'Georgi Georgiev')
        });

        it('should add vacationers', function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
            expect(holidayPackage.vacationers.length).to.be.equal(3)
        });

        it('should calculate correctly', function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');
            let result = holidayPackage.generateHolidayPackage();

            expect(result).to.be.equal('Holiday Package Generated\n' +
                'Destination: Italy\n' +
                'Vacationers:\n' +
                'Ivan Ivanov\n' +
                'Petar Petrov\n' +
                'Georgi Georgiev\n' +
                'Price: 1400')
        });
    });

    describe('test exceptional cases', function () {
        let holidayPackage;
        beforeEach(function () {
            holidayPackage = new HolidayPackage('Italy');
        });

        it('should be instantiated with two parameters – a string destination and a string season.', function () {
            expect(holidayPackage.destination).to.be.equal('Italy');
            expect(holidayPackage.season).to.be.undefined;
        });

        it('should throw error for non boolean value set ont insuranceIncluded()', function () {
            expect(function () {
                holidayPackage.insuranceIncluded = 'true';
            }).to.throw(Error, 'Insurance status must be a boolean')
        });

        it('should throw error for non boolean value set ont insuranceIncluded()', function () {
            expect(function () {
                holidayPackage.insuranceIncluded = 0;
            }).to.throw(Error, 'Insurance status must be a boolean')
        });

        it('should throw error for non string name', function () {
            expect(function () {
                holidayPackage.addVacationer(10);
            }).to.throw(Error,"Vacationer name must be a non-empty string")
        });

        it('should throw error for empty string name', function () {
            expect(function () {
                holidayPackage.addVacationer(' ');
            }).to.throw(Error,"Vacationer name must be a non-empty string")
        });

        it('should throw error for single name', function () {
            expect(function () {
                holidayPackage.addVacationer("Peter");
            }).to.throw(Error,"Name must consist of first name and last name");
        });

        it('should throw error for name with more than one space', function () {
            expect(function () {
                holidayPackage.addVacationer("Peter  Peter");
            }).to.throw(Error,"Name must consist of first name and last name");
        });

        it('should throw error if no vacationers for generateHolidayPackage()', function () {
            expect(function () {
                holidayPackage.generateHolidayPackage();
            }).to.throw(Error,"There must be at least 1 vacationer added");
        });
    })
});