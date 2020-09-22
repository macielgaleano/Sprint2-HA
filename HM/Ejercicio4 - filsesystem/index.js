const http = require("http");
const fs = require("fs");
const express = require('express');
const moment = require("moment");
const app = express();
const port = 8000;

// console.log(__dirname);

app.get('/', (req, res) => {
  fs.writeFile('access_log.txt', 'Se llamó al servidor el '+ moment().format('ddd') +' de '+ moment().format('MMMM') +' de '+ moment().format('yyyy') +' a las '+ moment().format('h:mm:ss a') +' ('+ moment().format('dddd') +'). \n'
  , function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  }); 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})