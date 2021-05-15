const { json } = require('body-parser');
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
  //var data = JSON.parse(body);
  var data = {
    "Employee": {
        "id": req.body.empNo,
        "fname": req.body.fname,
        "lname":req.body.lname,
        "team":req.body.team,
        "feedback":req.body.feedback
    }
  }; 
  
 /* return res
          .status(201)
          .json(data);*/

res.redirect('/test/'+ data.Employee.id );
});

module.exports = router;