const parser = require('../../src/api/parser');

describe('Parse file to JSON', () => {
  it('Should to parse a log file to JSON', () => {
    const games = parser;

    expect(games).toBeTruthy();
    expect(typeof games).toBe('object');
  });
});
