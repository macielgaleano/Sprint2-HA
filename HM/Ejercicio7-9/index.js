const http = require("http");
const express = require('express')
const app = express()
const port = 3000;


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html')
});

app.get('/app', (req, res) => {
  res.sendFile(__dirname + '/app.js')
});

app.get('/multiplicar', (req, res) => {
  let result = (Number(req.query.nom1) * Number(req.query.nom2));
  console.log(result);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


