const { json } = require('body-parser');
var express = require('express');
var bodyParser = require('body-parser');
const { Pool, Client } = require('pg');
require('dotenv').config();

var urlencodedParser = bodyParser.urlencoded({ extended: false });  

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?sslmode=require`



var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { heading: 'Feedback',  condition: true, anyArray: [1,2,3] });
});



/* Create Table endpoint. Call this one time */

router.get('/createTable', function (req, res) {
  var tableName = req.params.tableName;
  const pool = new Pool({
    connectionString,
  });
  const client = new Client({
    connectionString,
   });
  client.connect();
  client.query( "CREATE TABLE tableFeedback (id SERIAL PRIMARY KEY, empno VARCHAR(30), fname VARCHAR(30),lname VARCHAR(30), team VARCHAR(15), feedbacktext VARCHAR(100))" , function( err, result) {

      if (!err) {
         console.log("Table created successfully")
      }
      client.end();
    });
  pool.end();
 });


//Store data into database
router.post('/storeData',urlencodedParser, function (req, res) {
  
 var empNo = req.body.empNo;
 var fname = req.body.fname;
 var lname = req.body.lname;
 var team = req.body.team;
 var feedbackText = req.body.feedbackText;
 const pool = new Pool({
  connectionString,
});

 const client = new Client({
  connectionString,
 });

 client.connect();

 client.query('INSERT INTO tablefeedback (empno,fname,lname,team,feedbacktext) VALUES ($1, $2, $3, $4, $5)', [empNo, fname, lname, team, feedbackText], function (err, result) {
    if (err) {
        res.status(500).send(err.toString());
    } else {
      
        console.log('Feedback Successfully Recorded ' + fname);
        res.render('thank', {output: req.params.empNo});
       
    }
    client.end();
 });
 pool.end();
});

module.exports = router;