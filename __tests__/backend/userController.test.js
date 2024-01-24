const request = require('supertest');
const server = 'http://localhost:3000/user';
const { User } = require('../../server/model');

describe('UserController routes', () => {
  let response;
  let user;
  describe('signup', () => {
    beforeAll(async () => {
      response = await request(server)
        .post('/signup')
        .send({ username: 'testingsignup', password: 'testingpassword' });
    });
    afterAll(async () => {
      await User.findOneAndDelete({ username: 'testingsignup' });
    });
    it('responds with status code 200', () => {
      expect(response.statusCode).toEqual(200);
    });
    it('adds user to database', async () => {
      const userFromDb = await User.find('testingsignup');
      expect(userFromDb).not.toBe(null);
    });
  });

  // WAITING TO TEST LOGIN UNTIL SESSIONS ARE FULLY CONFIGURED

  describe('login', () => {
    beforeAll(async () => {
      user = await User.create({
        username: 'testinglogin',
        password: 'passwordtest',
      });
      response = await request(server)
        .post('/login')
        .send({ username: 'testinglogin', password: 'passwordtest' });

      console.log('logging response', response);
    });
    afterAll(async () => {
      await User.findOneAndDelete({ username: 'testinglogin' });
    });
    it('responds with status code 200', () => {
      expect(response.statusCode).toEqual(200);
    });
    it('responds with session cookike', () => {
      expect(response.cookies.SSID).toEqual(user._id);
    });
  });
});
