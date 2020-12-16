const request = require('supertest');
const app = require('../app');

describe('Health Check', () => {
  it('Should returns application health', () => {
    request(app)
      .get('/api/v1/healthCheck')
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
});

describe('List all games', () => {
  it('Should returned status http OK', async () => {
    await request(app)
      .get('/api/v1/games')
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
});

describe('List specific game', () => {
  it('Should returned status http OK', async () => {
    await request(app)
      .get('/api/v1/games/1')
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
});

describe('Upload without file', () => {
  it('Should returned status http created', async () => {
    await request(app)
      .post('/api/v1/upload')
      .then((res) => {
        expect(res.status).toBe(500);
      });
  });
});
