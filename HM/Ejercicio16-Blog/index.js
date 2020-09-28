const express = require('express');
const app = express();
const fetch = require("node-fetch");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./routes')(app);
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.listen(8080);