const request = require('supertest');
const fs = require('fs');
const path = require('path');
const server = 'http://localhost:3000';
const SessionController = require('../../server/SessionController');
const { Session } = require('../../server/model');

// const sessionSchema = new mongoose.Schema({
//   cookieId: { type: String, required: true, unique: true },
//   createdAt: { type: Date, expires: 600, default: Date.now },
// });

xdescribe('SessionController ', () => {
  it('returns 500 when an error occurs', () => {
    const status = SessionController.isLoggedIn(); //force an error here
    expect(status).toBe(500);
  });
});
