module.exports = function(app){

  const mysql = require('mysql');
  const axios = require('axios');
  
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
  });

  const miQuery = (query, cb) => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'test'
    });
    connection.connect(function(err){
      if(err) throw err;
      console.log('DB conncected!🐦')
      connection.query(query, (err, users) => {
        if(err) throw err;
        connection.end();
        cb(users);
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
    miQuery(`INSERT INTO users (firstname, lastname, age) VALUES (
      ${ connection.escape(req.body.nombre) }, 
      ${ connection.escape(req.body.apellido) }, 
      ${ connection.escape(req.body.edad) });`, () => {
      res.redirect('/usuarios')
    })   
  })

  app.get('/usuarios/eliminar/:id', (req, res) => {
    miQuery('delete from users where id =' + connection.escape(req.params.id), () => {
      res.redirect('/usuarios')
    })    
  })

  app.post('/usuarios/modificar' , (req, res) => {
    miQuery(`select * from users where id = ${connection.escape(req.body.id)}`, (user) => {
      let nombre;
      let apellido;
      let edad;
      req.body.nombre.length > 0 ? nombre=req.body.nombre : nombre=user[0].firstname;
      req.body.apellido.length > 0 ? apellido=req.body.apellido : apellido=user[0].lastname; 
      req.body.edad.length > 0 ? edad=req.body.edad : edad=user[0].age;  
      miQuery(`
        update users set 
        firstname = '${nombre}',
        lastname = '${apellido}',
        age = ${edad} 
        where id  = ${req.body.id}`, () => {
        res.redirect('/usuarios')
      })
    })
  })



}