const express = require("express");
const app = express();

app.get("https://morning-bastion-26574.herokuapp.com/", (req, res) => res.send("Hello this is change made from home to GIT!"));

app.listen(3000, () => console.log("Server listening on port 3000!"));