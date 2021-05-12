const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello this is change made from local to remote!"));


app.listen(PORT, () => console.log("Server listening on port !"));
