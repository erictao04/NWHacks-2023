const db = require('better-sqlite3')('project.db');
db.pragma('journal_mode = WAL');
const express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
  const body = req.body;
  console.log(JSON.stringify(body, null, 2));

  const TASKS = `SELECT *
                   FROM Task
                   INNER JOIN User ON Task.user_id=User.id`;

  try {
    const ALLTASKS = db.prepare(TASKS).all();
    res.send(ALLTASKS).status(200);
  } catch (err) {
    res.send('Fail').status(500);
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  console.log(JSON.stringify(body, null, 2));

  const NEWTASK = `INSERT INTO Task
                      (user_id, name, completed, picture_url)
                      VALUES ('${body.user_id}', '${body.name}', '${body.completed}', '${body.picture_url}')`;

  try {
    db.exec(NEWTASK);
    res.send('New task created!').status(200);
  } catch (err) {
    console.log('Error:  ' + err);
    res.send('Internal Error').status(500);
  }
  res.send('New task created!').status(200);
});

router.delete('/', (req, res) => {
  const body = req.body;
  console.log(JSON.stringify(body, null, 2));

  const DELETE = `DELETE FROM Task WHERE id='${body.task_id}'`;

  try {
    db.exec(DELETE);
    res.send('Success!').status(200);
  } catch (err) {
    console.log('Error: ' + err);
    res.send('Fail').status(500);
  }
});

router.put('/', (req, res) => {
  const body = req.body;
  console.log(JSON.stringify(body, null, 2));

  const isExistent = `SELECT * FROM Task
                WHERE id='${body.task_id}'`;

  const task = db.prepare(isExistent).get();

  if (task) {
    const MODIFY = `UPDATE Task SET name='${body.task_name}' WHERE id='${body.task_id}'`;

    try {
      db.exec(MODIFY);
      res.send('Successfully modified task name!').status(200);
    } catch (err) {
      console.log('Error: ' + err);
      res.send('Fail').status(500);
    }
  } else {
    res.send('Task does not exist').status(500);
  }
});

module.exports = router;
