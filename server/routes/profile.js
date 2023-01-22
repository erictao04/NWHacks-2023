const db = require('better-sqlite3')('project.db');
db.pragma('journal_mode = WAL');
const express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();

router.use(bodyParser.json());

router.get('/login', (req, res) => {
  const body = req.body;
  console.log(JSON.stringify(body, null, 2));

  const USER = `SELECT * FROM User
                WHERE username='${body.username}' AND password='${body.password}'`;

  try {
    const user = db.prepare(USER).get();

    if (user) {
      res.send('Logged in, redirecting!').sendStatus(200);
    } else {
      res.send('Wrong username/password').sendStatus(401);
    }
  } catch (err) {
    console.log('Error: ' + err);
    res.send('Error').sendStatus(500);
  }

  //res.send('GET /LOGIN');
});

router.post('/signup', (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));

  const body = req.body;

  const NEWUSER = `INSERT INTO User
                    (name, email, username, password, profile_picture_url)
                    VALUES ('${body.name}', '${body.email}', '${body.username}', '${body.password}', '${body.profile_picture_url}')`;

  try {
    db.exec(NEWUSER);
    res.send('New user created!').sendStatus(200);
  } catch (err) {
    console.log('Error:  ' + err);
    res.send('Username is taken').sendStatus(500);
  }
});

module.exports = router;
