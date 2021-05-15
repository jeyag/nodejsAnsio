var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { heading: 'Feedback',  condition: true, anyArray: [1,2,3] });
});

router.get('/test/:empNo', function(req, res, next) {
  res.render('test', {output: req.params.empNo});
});

router.post('/test/submit', function(req, res, next) {
 
res.redirect('/test/' + req.body.empNo);
});

module.exports = router;