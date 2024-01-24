const { Session } = require('./model');

const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {
  Session.findOne({ cookieId: req.cookies.ssid }, (err, session) => {
    if (err) {
      //in the case of a database error
      return next({
        log: 'Error in sessionController.isLoggedIn',
        status: 500,
        message: { err: 'An error occured.' },
      });
      //if no session is found
    } else if (!session) {
      //redirect to the signup page, where they can sign up or request to log in
      return res.redirect('/signup'); //<<<<<<<<<redirect somewhere else?
    } else {
      //session is found
      return next();
    }
  });
};

sessionController.startSession = (req, res, next) => {
  Session.create({ cookieId: res.locals.userid }, (err, session) => {
    //database error
    if (err)
      return next({
        log: 'Error in sessionController.startSession.',
        status: 500,
        message: { err: 'An error occured.' },
      });
    //if no error is triggered, then the session is created; move on to next middleware
    else return next();
  });
};

module.exports = sessionController;
