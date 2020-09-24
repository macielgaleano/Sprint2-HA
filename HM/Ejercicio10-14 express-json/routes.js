module.exports= function(app) {

  app.get('/teams', function(req,res){
    let teams = require('./db');
    res.send(teams);
  });

  app.get('/teams:id', function(req,res){
    let teams = require('./db');
    var id = req.params.id;
    for (let i = 0; i < teams.length; i++) {
      console.log(teams[i].id);
      
    }
    
  });

}