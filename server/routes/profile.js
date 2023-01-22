const db = require('better-sqlite3')('project.db');
db.pragma('journal_mode = WAL');
const express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
let router = express.Router();
dotenv.config();

router.use(bodyParser.json());
router.use(cookieParser());

router.post('/signup', (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));

  const body = req.body;

  bcrypt.hash(body.password, 10, function (err, hash) {
    const NEWUSER = `INSERT INTO User
    (name, email, username, password, profile_picture_url)
    VALUES ('${body.name}', '${body.email}', '${body.username}', '${hash}', '${body.profile_picture_url}')`;

    try {
      db.exec(NEWUSER);
      res.send('New user created!').status(200);
    } catch (err) {
      console.log('Error:  ' + err);
      res.send('Username is taken').status(500);
    }
  });
});

router.get('/login', (req, res) => {
  const body = req.body;
  console.log(JSON.stringify(body, null, 2));

  const USER = `SELECT * FROM User
                WHERE username='${body.username}'`;

  try {
    const user = db.prepare(USER).get();
    console.log(user);

    if (user) {
      bcrypt.compare(body.password, user.password, (err, result) => {
        if (result) {
          res.send('Logged in, redirecting!').status(200);
        } else {
          res.send('Wrong password').status(401);
        }
      });
    } else {
      res.send('Wrong username/password').status(401);
    }
  } catch (err) {
    console.log('Error: ' + err);
    res.send('Error').status(500);
  }

  //res.send('GET /LOGIN');
});

module.exports = router;
