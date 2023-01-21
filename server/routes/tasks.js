const express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
  res.send('GET /TASKS');
});

router.post('/', (req, res) => {
  res.send('POST /TASKS');
});

router.delete('/', (req, res) => {
  res.send('DELETE /TASKS');
});

router.put('/', (req, res) => {
  res.send('PUT /TASKS');
});

module.exports = router;
