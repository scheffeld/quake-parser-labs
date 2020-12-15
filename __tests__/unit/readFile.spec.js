const readFile = require('../../src/api/readFile');

describe('Read log file of the game', () => {
  it('Should to read a log file', () => {
    const file = readFile;

    expect(file).toBeTruthy();
    expect(typeof file).toBe('object');
  });
});
