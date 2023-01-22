const express = require('express');
const db = require('better-sqlite3')('project.db');
db.pragma('journal_mode = WAL');

const app = express();
const port = 3001;

const createUserTable = `
  CREATE TABLE User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL, 
    username VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    profile_picture_url VARCHAR DEFAULT ''
  );
`;

const createFriendTable = `
  CREATE TABLE Friend (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user1_id INTEGER NOT NULL,
    user2_id INTEGER NOT NULL
  );
`;

const createTaskTable = `
  CREATE TABLE Task (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    time_created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    time_completed DATETIME,
    picture_url VARCHAR
  );
`;

const createFriendRequestsTable = `
  CREATE TABLE FriendRequests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date DATETIME DEFAULT CURRENT_TIME, 
    receiver_id INTEGER NOT NULL,
    sender_id INTEGER NOT NULL
);`;

try {
  db.exec(createUserTable);
  console.log('Create person table');
} catch (e) {
  console.log('Person table exists already');
}

try {
  db.exec(createFriendTable);
  console.log('Create friend table');
} catch (e) {
  console.log('Friend table exists already');
}

try {
  db.exec(createTaskTable);
  console.log('Create task table');
} catch (e) {
  console.log('Task table exists already');
}

try {
  db.exec(createFriendRequestsTable);
  console.log('Create friend requests table');
} catch (e) {
  console.log('Friend requests exists already');
}

const friendsRequests = require('./routes/friend-request');
const profile = require('./routes/profile');
const tasks = require('./routes/tasks');
const feed = require('./routes/feed');
const friends = require('./routes/friends');

app.use('/friend-requests', friendsRequests);
app.use('/profile', profile);
app.use('/tasks', tasks);
app.use('/feed', feed);
app.use('/friends', friends);

app.get('/', (req, res) => {
  res.send('Hello World, backend works!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
