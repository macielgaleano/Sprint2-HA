const http = require("http");
const fs = require("fs");
const express = require('express')
const app = express()
const port = 8000;
const path = require('path');

app.get('/', (req, res) => {
  res.json(persona);
});

let routeFile = __dirname;
let file_extension = process.argv[1];
// let file_extension = process.argv[1];

function fromDir(startPath,filter){

  //console.log('Starting from dir '+startPath+'/');

  if (!fs.existsSync(startPath)){
      console.log("no dir ",startPath);
      return;
  }

  var files=fs.readdirSync(startPath);
  for(var i=0;i<files.length;i++){
      var filename=path.join(startPath,files[i]);
      var stat = fs.lstatSync(filename);
      if (stat.isDirectory()){
          fromDir(filename,filter); //recurse
      }
      else if (filename.indexOf(filter)>=0) {
          console.log('-- found: ',filename);
      };
  };
};


fromDir(routeFile,file_extension);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})