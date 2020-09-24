module.exports= function(app) {
  var frutasList = ["Manzana", "Pera","Frutilla"];
  app.get('/', function(req,res){
  });

  app.get('/frutas', function(req,res){
    res.render('pages/frutas', {frutas: frutasList})
  });

  app.post('/frutas', (req, res) => {
    res.render('pages/frutas')
  });
}