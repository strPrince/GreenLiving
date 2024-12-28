// routes/home.js
// routes/home.js
const express = require('express');
const router = express.Router();
const Echo = require('../models/data');

router.get('/', async (req, res) => {
  res.render('404');
});

module.exports = router;

  