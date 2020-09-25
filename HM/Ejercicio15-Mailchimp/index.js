const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3000;
require('./routes')(app);
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.listen(3000);
