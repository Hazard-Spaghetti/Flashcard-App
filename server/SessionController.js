const { Session } = require('./model');

const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {
  try {
    Session.findOne({ cookieId: res.locals.userid });
    res.locals.loggedIn = true;
    return next();
  } catch (err) {
    return next({
      log: 'Error in sessionController.isLoggedIn',
      status: 500,
      message: { err: 'An error occured.' },
    });
  }
};
//if no session is found
// } else if (!session) {
//   //redirect to the signup page, where they can sign up or request to log in
//   return res.redirect('/signup'); //<<<<<<<<<redirect somewhere else?

sessionController.startSession = async (req, res, next) => {
  try {
    await Session.create({ cookieId: res.locals.userid });
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught in SessionController.startSession',
      status: 400,
      message: { error: err },
    });
  }

  //if no error is triggered, then the session is created; move on to next middleware
};

module.exports = sessionController;
