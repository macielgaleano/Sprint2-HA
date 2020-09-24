module.exports= function(app) {
  var frutasList = ["Manzana", "Pera","Frutilla"];
  app.get('/', function(req,res){
  });

  app.get('/frutas', function(req,res){
    res.render('pages/frutas', {frutas: frutasList})
  });

  app.post('/frutas', (req, res) => {
    // res.render('pages/frutas')''
    req.body.fruta_ingresada
    frutasList.push(req.body.fruta_ingresada);
    res.render('pages/frutas', {frutas: frutasList})
  });
}