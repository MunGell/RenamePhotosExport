const path = require('path');
const {expect} = require('chai');

const {
    getDirectories,
    getDatedDirectories,
    getDateFromDirectoryName,
    getNewDirectoryName
} = require('../');

const stubDirectories = require('./stub/directories.json');
const stubTargetDirectories = require('./stub/target-directories.json');

describe('getDirectories', () => {
    const basepath = path.resolve(__dirname, './stub');
    it('returns directories only', () => {
        expect(getDirectories(basepath)).to.eql(stubDirectories);
    });
});

describe('getDatedDirectories', () => {
    it('returns dated directories only', () => {
        expect(getDatedDirectories(stubDirectories)).to.eql(stubTargetDirectories);
    });

    it('returns correctly dated directories only', () => {
        expect(getDatedDirectories(stubDirectories)).to.eql(stubTargetDirectories);
    });
});

describe('getDateFromDirectoryName', () => {
    it('returns Moment object of parsed date', () => {
        expect(getDateFromDirectoryName(stubTargetDirectories[1])).to.be.an('object');
    });

    it('returns null if date is invalid', () => {
        expect(getDateFromDirectoryName('random')).to.be.null;
    });
});

describe('getNewDirectoryName', () => {

});
