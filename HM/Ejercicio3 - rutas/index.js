const http = require("http");
const fs = require("fs");
const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.json(persona);
});

app.get('/home', (req, res) => {
  res.send('home');
});

app.get('/productos', (req, res) => {
  res.send('productos');
});

app.get('/contacto', (req, res) => {
  res.send('contcato');
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})