const db = require('better-sqlite3')('project.db');
db.pragma('journal_mode = WAL');
const express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
let router = express.Router();
dotenv.config();

router.use(bodyParser.json());
router.use(cookieParser());

router.get('/', (req, res) => {
  const body = req.body;
  console.log(JSON.stringify(body, null, 2));

  const POSTS = `SELECT * FROM Task `;

  const FRIENDS = `SELECT *
                     FROM Friend
                     INNER JOIN User ON Friend.user1_id='${body.user_id}'`;

  try {
    const ALLFRIENDS = db.prepare(FRIENDS).all();
    res.send(ALLFRIENDS).status(200);
  } catch (err) {
    res.send('Fail').status(500);
  }
});

module.exports = router;
