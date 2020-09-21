const http = require("http");
const fs = require("fs");
const express = require('express')
const app = express()
const port = 8000

console.log(__dirname);

app.get('/', (req, res) => {
  res.json(persona);
});