let expect = require('chai').expect;
let Player = require('../Player').Player;

describe('class Player test', function () {
    it('should ', function () {
        let p = new Player('Trotro');

        expect(p.toString()).to.equal('Trotro: []','Function toString() does not return proper string!');
        expect(p.highestScore).to.equal(undefined, 'Invalid high score!');
        expect(p.topFiveScore.length).to.equal(0, 'Invalid top five score!');
        expect(p.scoreCount).to.equal(0, 'Invalid score count!');

        p.addScore(undefined);

        expect(p.toString()).to.equal('Trotro: []','Function toString() does not return proper string!');
        expect(p.highestScore).to.equal(undefined, 'Invalid high score!');
        expect(p.topFiveScore.length).to.equal(0, 'Invalid top five score!');
        expect(p.scoreCount).to.equal(0, 'Invalid score count!');

        p.addScore(null);

        expect(p.toString()).to.equal('Trotro: []','Function toString() does not return proper string!');
        expect(p.topFiveScore.length).to.equal(0, 'Invalid top five score!');
        expect(p.highestScore).to.equal(undefined, 'Invalid high score!');
        expect(p.scoreCount).to.equal(0, 'Invalid score count!');
    });
});