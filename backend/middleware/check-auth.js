const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "keep_it_secret_keep_it_safe");
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed" });
  }
};
