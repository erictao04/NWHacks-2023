const express = require('express');
const app = express();
const port = 3001;

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
