const UserController = {};
const { User, Session } = require('./model');

UserController.signUp = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await User.create({ username, password });
    res.cookie('SSID', result._id, { httpOnly: true });
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught in UserController.signUp',
      status: 400,
      message: { error: `${err}` },
    });
  }
};

UserController.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await User.find({ username });
    const userData = result[0];
    console.log('logging result ', result);
    if (userData.password === password) {
      res.locals.isLoggedIn = true;
      res.locals.userid = userData._id;
      res.cookie('SSID', res.locals.userid, { httpOnly: true });
    } else {
      res.locals.isLoggedIn = false;
      return next({
        log: 'Login failed',
        status: 401,
        message: { error: 'Incorrect username/password' },
      });
    }
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught in UserController.login',
      status: 400,
      message: { error: `${err}` },
    });
  }
};

// UserController.createSession = async (req, res, next) => {
//   try{
//     const session = await Session.create({
//       cookieId: res.locals.userid,
//     })

//   }
// }

module.exports = UserController;
