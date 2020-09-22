const http = require("http");
const fs = require("fs");
const slugify = require('slugify', {
    replacement: '-'
});


const server = http.createServer(function(req,res){
    console.log("Alguien accedió al servidor");
    var cadena = "¡Vamo arriba Uruguay & España! �";
    console.log(slugify(cadena));
    res.end("Respuesta");
});

server.listen(8080);