const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/data", (req, res) => {
  res.send("App Data is comming");
});
app.listen(port, () => {
  console.log(`App listing at ${port}`);
});
