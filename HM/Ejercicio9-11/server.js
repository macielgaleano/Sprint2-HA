const http = require("http");
const express = require('express')
const app = express()
const port = 3000;
var dias_semana = new Array ("Monday", "Tuesday", "Wednesday", "Thursday", "Friday");
var dias_fin_semana = new Array ( "Saturday","Sunday",);

var dateTime = require('node-datetime');
var dt = dateTime.create();
var formatted = dt.format('W');
console.log(formatted);
var sItem = 'SAMPLE ITEM';
var sample_list = [sItem, sItem, sItem, sItem];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    for (let i = 0; i < dias_semana.length; i++) {
        if(dias_semana[i] == formatted){
            res.render('pages/home' , {title: "Hoy es un día de semana"});
        }
    }
    for (let i = 0; i < dias_fin_semana.length; i++) {
        if(dias_fin_semana[i] == formatted){
            res.render('pages/home' , {title: "Hoy es fin de semana"});
        }
    }
});


// use res.render to load up an ejs view file

// about page
app.get('/productos', function(req, res) {
    res.render('pages/productos', { products: sample_list });
});
app.get('/sobre-nosotros', function(req, res) {
    res.render('pages/index');
});
app.get('/contacto', function(req, res) {
    res.render('pages/index');
});

app.listen(3000);




// app.get('/', function(req, res) {
//     var mascots = [
//         { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
//         { name: 'Tux', organization: "Linux", birth_year: 1996},
//         { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
//     ];
//     var tagline = "No programming concept is complete without a cute animal mascot.";

//     res.render('pages/index', {
//         mascots: mascots,
//         tagline: tagline
//     });
// });


