const http = require("http");
const fs = require("fs");
var persona = require('./persona');
const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.json(persona);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})