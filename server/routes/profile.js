const express = require('express');
let router = express.Router();

router.get('/login', (req, res) => {
  res.send('GET /LOGIN');
});

router.post('/signup', (req, res) => {
  res.send('POST /SIGNUP');
});

module.exports = router;
