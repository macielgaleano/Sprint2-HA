module.exports = function(app){

  var dias_semana = new Array ("Monday", "Tuesday", "Wednesday", "Thursday", "Friday");
  var dias_fin_semana = new Array ( "Saturday","Sunday",);

  var dateTime = require('node-datetime');
  var dt = dateTime.create();
  var formatted = dt.format('W');
  console.log(formatted);
  var sItem = 'SAMPLE ITEM';
  var sample_list = [sItem, sItem, sItem, sItem];

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

  app.get('/productos', function(req, res) {
      res.render('pages/productos', { products: sample_list });
  });
  app.get('/sobre-nosotros', function(req, res) {
      res.render('pages/index');
  });
  app.get('/contacto', function(req, res) {
      res.render('pages/index');
  });

 
}