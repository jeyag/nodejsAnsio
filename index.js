const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
var routes = require('./routes/index');

app.get("/", (req, res) => res.send("Hello this is change made from local to remote!"));

// POST method route
app.post("/post", function (req, res) {
    res.send('POST request to the homepage');
  });


app.listen(PORT, () => console.log("Server listening on port !"));
