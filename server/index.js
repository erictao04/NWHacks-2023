const express = require('express');
const db = require('better-sqlite3')('project.db');
db.pragma('journal_mode = WAL');

const app = express();
const port = 3001;

const createPeopleTable = `
  CREATE TABLE People (
    id INT AUTO_INCREMENT,
    name VARCHAR NOT NULL DEFAULT '',
    username VARCHAR NOT NULL DEFAULT '',
    password VARCHAR NOT NULL DEFAULT '',
    profile_picture_url VARCHAR DEFAULT '',
    PRIMARY KEY (id)
  );
`;

const createFriendsTable = `
    CREATE TABLE Friend (
    id INT AUTO_INCREMENT,
    person1_id INT NOT NULL DEFAULT NULL,
    person2_id INT NOT NULL,
    PRIMARY KEY (id)
  );
`;
const createTaskTable = `
  CREATE TABLE Task (
    id INT AUTO_INCREMENT,
    person_id INT NOT NULL,
    name VARCHAR NOT NULL,
    time_created DATETIME NOT NULL,
    completed BOOLEAN NOT NULL,
    picture_url VARCHAR NOT NULL,
    PRIMARY KEY (id)
  );
`;

try {
  db.exec(createPeopleTable);
  console.log('Create person table');
} catch (e) {
  console.log('Person table exists already');
}

try {
  db.exec(createFriendsTable);
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

const friendsRequests = require('./routes/friend-request');
const profile = require('./routes/profile');
const tasks = require('./routes/tasks');

app.use('/friend-requests', friendsRequests);
app.use('/profile', profile);
app.use('/task', tasks);

app.get('/', (req, res) => {
  res.send('Hello World, backend works!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
