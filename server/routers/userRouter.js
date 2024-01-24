const router = require('express').Router();
const UserController = require('../UserController.js');
const sessionController = require('./SessionController');
const { User } = require('../model.js');

router.post(
  '/signup',
  UserController.signUp,
  sessionController.startSession,
  (req, res, next) => {
    return res.status(200).send('Signup Success!');
  }
);

router.post(
  '/login',
  UserController.login,
  sessionController.startSession,
  (req, res, next) => {
    // needs refactoring if sessions are implemented
    if (res.locals.isLoggedIn) return res.status(200).send('Login Success');
  }
);

module.exports = router;
