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




app.listen(PORT, () => console.log("Server listening on port !"));
