const express = require('express');
let router = express.Router();

router.post('/accept', (req, res) => {
  res.send('POST /ACCEPT');
});

router.post('/decline', (req, res) => {
  res.send('POST /DECLINE');
});

module.exports = router;
