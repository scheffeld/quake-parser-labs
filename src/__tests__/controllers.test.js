const request = require('supertest');
const path = require('path');
const app = require('../app');

const correctFile = path.resolve(__dirname, '../data/games.log');
const wrongFile = path.resolve(__dirname, '../../README.md');

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

describe('Game not fount', () => {
  it('Should returned status http OK', async () => {
    await request(app)
      .get('/api/v1/games/23')
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
});

describe('Upload without file', () => {
  it('Should returned status http internal server error', async () => {
    await request(app)
      .post('/api/v1/upload')
      .then((res) => {
        expect(res.status).toBe(500);
      });
  });
});

describe('Upload wrong type file', () => {
  it('Shoul return status http internal server error', async () => {
    await request(app)
      .post('/api/v1/upload')
      .attach('file', wrongFile)
      .then((res) => {
        expect(res.status).toBe(500);
      });
  });
});

describe('Upload file', () => {
  it('Should return status http created', async () => {
    await request(app)
      .post('/api/v1/upload')
      .attach('file', correctFile)
      .then((res) => {
        expect(res.status).toBe(201);
      });
  });
});
