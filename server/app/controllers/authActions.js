const argon2 = require("argon2");
const tables = require("../../database/tables");

const verifyEmailPassword = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmailWithPassword(req.body.email);
    if (user == null) {
      res.sendStatus(401);
    }

    const verified = await argon2.verify(user.password, req.body.password);

    if (verified) {
      delete user.password;
      req.user = user;
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    res.cookie("auth", req.token).json({
      message: "Login successfull",
      id: req.user.id,
      email: req.user.email,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { verifyEmailPassword, login };
