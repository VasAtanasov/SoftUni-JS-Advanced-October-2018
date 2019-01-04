let expect = require('chai').expect;
let SoftUniFy = require('../app');

describe('class SoftUniFy test', function () {
    describe('initialization test', function () {
        let softUniFy = new SoftUniFy();
        it('should contain allSongs property', function () {
            expect(softUniFy.hasOwnProperty('allSongs')).to.be.true;
        });
        it('should contain allSongs of type object', function () {
            expect(typeof softUniFy.allSongs).to.be.equal('object');
        });

        it('allSongs should be initialized as an empty object.', function () {
            expect(Object.keys(softUniFy.allSongs).length).to.be.equal(0);
        });
    });

    describe('test downloadSong function', function () {
        let sofunify;
        beforeEach(function () {
            sofunify = new SoftUniFy();
            sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
        });

        it('should added successfully 2 artists', function () {
            expect(Object.keys(sofunify.allSongs).length).to.be.equal(2);
        });

        it('should add to artist the correct properties', function () {
            let artist = Object.keys(sofunify.allSongs['Eminem']);
            expect(JSON.stringify(artist)).to.be.equal('["rate","votes","songs"]');
        });

        it('should store artist\' songs correctly', function () {
            expect(JSON.stringify(sofunify.allSongs['Eminem']['songs']))
                .to.be.equal('["Venom - Knock, Knock let the devil in...","Phenomenal - IM PHENOMENAL..."]');
        });

        it('should return the entire Class.', function () {
            expect(sofunify.downloadSong('Eminem', 'Venom',)).to.be.equal(sofunify);
        });
    });

    describe('test playSong function', function () {
        let sofunify;
        beforeEach(function () {
            sofunify = new SoftUniFy();
            sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
        });

        it('should print appropriet message when artist doesn\'t have the song', function () {
            expect(sofunify.playSong("Not in the list")).to.be
                .equal(`You have not downloaded a Not in the list song yet. Use SoftUniFy's function downloadSong() to change that!`)
        });
        it('should play the correct song', function () {
            expect(sofunify.playSong('Venom')).to.be.equal("Eminem:\nVenom - Knock, Knock let the devil in...\n");
        });
    });

    describe('test accessor property songList', function () {
        let sofunify;
        beforeEach(function () {
            sofunify = new SoftUniFy();
        });

        it('should get song list', function () {
            sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
            expect(sofunify.songsList).to.be.equal(
                "Venom - Knock, Knock let the devil in...\n" +
                "Phenomenal - IM PHENOMENAL...\n" +
                "Light Me On Fire - You can call me a liar.. "
            );
        });

        it('should get message for empty list', function () {
            expect(sofunify.songsList).to.be.equal('Your song list is empty');
        });
    });


    describe('test rateArtist function', function () {
        let sofunify;
        beforeEach(function () {
            sofunify = new SoftUniFy();
            sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
        });

        it('should rateArtist who exists', function () {
            let output = sofunify.rateArtist('Eminem',10);
            expect(output).to.be.equal(10)
        });

        it('should print message for artist who does not exist', function () {
            let output = sofunify.rateArtist('Papan',10);
            expect(output).to.be.equal("The Papan is not on your artist list.")
        });

        it('should print wrong message', function () {
            let output = sofunify.rateArtist();
            expect(output).to.be.equal("The undefined is not on your artist list.")
        });

        it('should print message for artist who does not exist', function () {
            let output = sofunify.rateArtist('Papan');
            expect(output).to.be.equal("The Papan is not on your artist list.")
        });

    });
});
