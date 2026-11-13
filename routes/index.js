let express = require('express');
let router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET About page. */
router.get('/aboutme', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});
/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});
/* GET Contact us page. */
router.get('/contactme', function(req, res, next) {
  res.render('index', { title: 'Contact me' });
});

module.exports = router;
