const http = require("http");

const server = http.createServer(function(req,res){
    res.end('hola mundo');
});

server.listen(3000);