const request = require('supertest');
const app = require('../../app');

describe('Return a JSON from log file', () => {
  it('Should returned a valid JSON whit the game', () => {
    const response = request(app).get('/api/v1/games');

    expect(response).toBeTruthy();
    expect(typeof response).toBe('object');
  });
});
