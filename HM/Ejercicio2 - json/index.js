const http = require("http");
const fs = require("fs");

var persona = require('./persona');

const server = http.createServer(function(req,res){
    res.end(persona);
});

server.listen(8000);