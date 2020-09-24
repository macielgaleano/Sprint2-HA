module.exports= function(app) {
  const db = require('./db');

  app.get('/teams', function(req,res){
    res.send(db);
  });

  app.get('/teams/:id', function(req,res){
    const id = req.params.id;
    db.teams.hasOwnPeoperty(id)
      ? res.status(200).json(db.teams[id])
      : res.status(404).send("404 error");
  });

  app.post('/teams', (req,res) => {
    let nuevoPais = req.body.id;
    if(db.teams.hasOwnPeoperty(nuevoPais)){
      res.status(409).json('Usuario ya existe');
    }else {
      db.teams[nuevoPais] = req.body;
      res.status(200).json(db);
    }    
  });

  app.delete('/teams/:id', function(req,res){
    const id = req.params.id;
    delete db.teams[id];
  });

  app.patch('/teams/:id', function(req,res){
    const id = req.params.id;
    const dataToadd = req.body;
    const propsTomodify = Object.keys(dataToadd);
    if(db.teams.hasOwnPeoperty(id)){
      delete dataToadd[id];
    }
    db.teams[id] = {...db.teams[id], ...dataToadd}
  });
}