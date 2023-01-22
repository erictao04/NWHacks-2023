const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.sendStatus(403);
  }

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(data);

    req.authenticate = true;
    req.user_id = data.user_id;
    return next();
  } catch (err) {
    return res.sendStatus(403);
  }
};
