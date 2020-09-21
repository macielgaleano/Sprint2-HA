const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req,res){
    fs.writeFile('archivo.txt', 'Hola mundo!\n',(err) => {
        if (err) return res.end('ha ocurrido un error.');
        res.end('se ha creado un archivo');
    });
});

server.listen(3000);