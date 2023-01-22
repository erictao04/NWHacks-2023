const db = require('better-sqlite3')('project.db');
db.pragma('journal_mode = WAL');
const express = require('express');
let bodyParser = require('body-parser');
const multer = require('multer');

let router = express.Router();
const upload = multer();

router.use(bodyParser.json());

router.get('/:user_id/', (req, res) => {
  const user_id = req.params.user_id;

  const TASKS = `SELECT Task.id, Task.name as task_name, completed, user_id
                   FROM Task
                  JOIN User ON Task.user_id=User.id
                  WHERE user_id='${user_id}'`;

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
                      VALUES ('${body.user_id}', '${body.name}', 0, '')`;

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
    const MODIFY = `UPDATE Task SET name='${body.name}' WHERE id='${body.task_id}'`;
    const MODIFY2 = `UPDATE Task SET completed='${body.completed ? 1 : 0}' WHERE id='${
      body.task_id
    }'`;
    const MODIFY3 = `UPDATE Task SET time_completed='${Date.now()}' WHERE id='${body.task_id}'`;

    try {
      db.exec(MODIFY);
      db.exec(MODIFY2);
      db.exec(MODIFY3);
      res.send('Successfully modified task name!').status(200);
    } catch (err) {
      console.log('Error: ' + err);
      res.send('Fail').status(500);
    }
  } else {
    res.send('Task does not exist').status(500);
  }
});

router.put('/upload-image', upload.single('image'), (req, res) => {
  const file = req.file;
  const body = req.body;

  const MODIFY = `UPDATE Task SET picture_url='${file.buffer.toString('base64')}' WHERE id='${
    body.task_id
  }'`;

  try {
    db.exec(MODIFY);
    res.send('Successfully modified task picture url!').status(200);
  } catch (err) {
    console.log('Error: ' + err);
    res.send('Fail').status(500);
  }
});

module.exports = router;
