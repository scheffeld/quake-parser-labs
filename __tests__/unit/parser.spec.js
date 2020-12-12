const parser = require('../../src/util/parser');

describe('Parse file to JSON', () => {
    it('Should to parse a log file to JSON', () => {
        const games = parser;

        expect(games).toBeTruthy();
        expect(typeof games).toBe('object');
    });
});