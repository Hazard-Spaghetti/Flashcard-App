const router = require('express').Router();
const UserController = require('../UserController.js');
const sessionController = require('../SessionController');
const { User } = require('../model.js');

router.post('/signup', UserController.signUp, (req, res, next) => {
  return res.status(200).send('Signup Success!');
});

router.post(
  '/login',
  UserController.login,
  sessionController.startSession,
  sessionController.isLoggedIn,
  (req, res, next) => {
    // needs refactoring if sessions are implemented
    if (res.locals.isLoggedIn)
      return res.status(200).json({
        isLoggedIn: res.locals.loggedIn,
      });
  }
);

module.exports = router;
