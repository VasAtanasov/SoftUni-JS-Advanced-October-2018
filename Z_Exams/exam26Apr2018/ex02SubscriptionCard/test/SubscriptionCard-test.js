let expect = require('chai').expect;
let SubscriptionCard = require('./../SubscriptionCard');

describe('class SubscriptionCard test', function () {
    describe('test initialization of SubscriptionCard class', function () {
        it('should be successfully initialized', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.firstName).to.be.equal('Pesho');
            expect(card.lastName).to.be.equal('Petrov');
            expect(card.SSN).to.be.equal('00000000');
            expect(Object.getPrototypeOf(card._subscriptions)).to.be.equal(Array.prototype);
            expect(card.isBlocked).to.be.false;
        });

        it('should be successfully initialized', function () {
            const card = new SubscriptionCard('Gosho', 'Qnhkov', 1231432534);
            expect(card.firstName).to.be.equal('Gosho');
            expect(card.lastName).to.be.equal('Qnhkov');
            expect(card.SSN).to.be.equal(1231432534);
            expect(card.isBlocked).to.be.false;
        });

        it('should be successfully initialized with undefined parameters', function () {
            const card = new SubscriptionCard();
            expect(card.firstName).to.be.undefined;
            expect(card.lastName).to.be.undefined;
            expect(card.SSN).to.be.undefined;
            expect(card.isBlocked).to.be.false;
        });
    });

    describe('test changing of properties',function () {
        let card;
        beforeEach(function () {
            card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
        });

        it('should not change firstName', function () {
            card.firstName = 'Gosho';
            expect(card.firstName).to.be.equal('Pesho')
        });

        it('should not change lastName', function () {
            card.lastName = 'Gosho';
            expect(card.lastName).to.be.equal('Petrov')
        });

        it('should not change SNN', function () {
            card.SSN = 'Gosho';
            expect(card.SSN).to.be.equal('00000000')
        });

        it('should not set block status', function () {
            card.isBlocked = true;
            expect(card.isBlocked).to.be.false;
        });
    });

    describe('test subscription validation', function () {
        let card;
        beforeEach(function () {
            card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
        });

        it('should get valid subscription', function () {
            expect(card.isValid('120', new Date('2018-04-28'))).to.be.true;
        });

        it('should get valid subscription on last day', function () {
            expect(card.isValid('120', new Date('2018-05-21'))).to.be.true;
        });

        it('should get valid subscription', function () {
            expect(card.isValid('*', new Date('2018-05-25'))).to.be.true;
        });

        it('should get invalid subscription', function () {
            expect(card.isValid('120', new Date('2018-04-21'))).to.be.false;
        });

        it('should get invalid subscription one day after', function () {
            expect(card.isValid('120', new Date('2018-05-23'))).to.be.false;
        });

        it('should get invalid subscription', function () {
            expect(card.isValid('11', new Date('2018-04-21'))).to.be.false;
        });

        it('should get invalid subscription', function () {
            card.block();
            expect(card.isValid('*', new Date('2018-05-25'))).to.be.false;
        });
    });

    describe('test bloch/unblock card', function () {
        let card;
        beforeEach(function () {
            card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
        });

        it('should block card', function () {
            card.block();
            expect(card.isBlocked).to.be.true;
        });

        it('should unblock card', function () {
            card.block();
            card.unblock();
            expect(card.isBlocked).to.be.false;
        });
    });
});