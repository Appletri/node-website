var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('contact-me', { title: 'Contact Page' });
});

module.exports = router;