const express = require("express");
const phones = require("./phones.json");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello wss");
});
app.get("/phones", (req, res) => {
  res.send(phones);
});
app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("i need data for", id);
  const phone = phones.find((phone) => phone.id == id);
  res.send(phone);
});

app.listen(port, () => {
  console.log(`Port is running at ${port}`);
});
