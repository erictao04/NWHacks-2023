const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('better-sqlite3')('project.db');

db.pragma('journal_mode = WAL');

let router = express.Router();

router.use(bodyParser.json());
router.use(cookieParser());

const auth = require('../auth');

router.post('/accept', auth, (req, res) => {
  const body = req.body;

  const friendReq = db.prepare(`SELECT * FROM FriendRequests WHERE id = ${body.id}`).get();

  const addFriend = db.transaction(() => {
    db.exec(
      `INSERT INTO Friend (user1_id, user2_id) VALUES (${friendReq.sender_id}, ${friendReq.receiver_id})`
    );
    db.exec(
      `INSERT INTO Friend (user1_id, user2_id) VALUES (${friendReq.receiver_id}, ${friendReq.sender_id})`
    );
    db.exec(`DELETE FROM FriendRequests WHERE id = ${body.id}`);
  });

  addFriend();

  res.send('Success').status(200);
});

router.post('/decline', (req, res) => {
  const body = req.body;

  db.exec(`DELETE FROM FriendRequests WHERE id = ${body.id}`);

  res.send('Success').status(200);
});

module.exports = router;
