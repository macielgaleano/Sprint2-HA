const http = require("http");
const express = require('express')
const app = express()
const port = 3000;
require('./routes')(app);

app.set('view engine', 'ejs');

app.listen(3000);



