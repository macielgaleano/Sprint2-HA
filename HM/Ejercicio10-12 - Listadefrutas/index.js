const http = require("http");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
require('./routes')(app);
app.use(express.static("public"));

app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.listen(3000);

