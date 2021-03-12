//require express
const express = require("express");

//instance of express

const app = express();

//simple Route
app.get("/", (req, res) => {
  res.send("hello World");
  console.table({ method: req.method, path: req.path });
});

//create server
const port = 5000;
app.listen(port, (error) => {
  error
    ? console.log(error)
    : console.log(`server is runing on port ${port}...`);
});
