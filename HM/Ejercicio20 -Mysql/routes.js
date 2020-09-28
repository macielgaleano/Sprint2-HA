module.exports = function(app){

  const mysql = require('mysql');
  
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
  });

  let miQuery = (query, cb) => {
    connection.connect(function(err){
      if(err) throw err;
      console.log('DB conncected!🐦')
      connection.query(query, (err, users) => {
        if(err) throw err;
        cb(users);
        connection.end();
      })
    }); 
  }

  app.get('/', (req, res) => {
    res.redirect('/usuarios')
  });

  app.get('/usuarios', (req, res) => {
    let users = miQuery('select * from users', (users) => {
      res.render('pages/usuarios', {users})
    });
    
  })

  app.post('/usuarios', (req, res) => {
    res.render('pages/homes')
  })

  app.get('/usuarios/eliminar/:id', (req, res) => {
    miQuery('delete from users where id =' + connection.escape(req.params.id), () => {
      res.redirect('/usuarios')
    })    
  })

  app.post('/usuarios/modificar' , (req, res) => {
    
  })



}