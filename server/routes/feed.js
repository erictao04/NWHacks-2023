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

  const feed = `SELECT username, picture_url, profile_picture_url, time_completed, completed, 
  Task.name, Task.id FROM Task LEFT JOIN User on user_id = User.id`;

  try {
    const Feed = db.prepare(feed).all();
    Feed.sort((a, b) => b.time_completed - a.time_completed);
    res.json(Feed).status(200);
  } catch (err) {
    res.send('Fail').status(500);
  }
});

module.exports = router;
