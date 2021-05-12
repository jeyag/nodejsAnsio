const PORT = process.env.PORT || 5000;
var path = require('path');
const express = require("express");
const app = express();
var hbs = require('express-handlebars');
var routes = require('./routes/index');

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get("/", (req, res) => res.send("Hello this is change made from local to remote!"));

// POST method route
app.post("/post", function (req, res) {
    res.send('POST request to the homepage');
  });


app.listen(PORT, () => console.log("Server listening on port !"));
