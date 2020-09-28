module.exports = function(app){

  const mysql = require('mysql');
  let usersSaved = [];
  
  const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
  });

  conection.connect(function(err){
    if(err) throw err;
    console.log('DB conncected!🐦')
  });

  app.get('/', (req, res) => {
    res.send('home');
  });

  app.get('/usuarios', (req, res) => {
    conection.query('select * from users', async(err, users) => {
      if(err) throw err;
      await users.map((item,index,array) => {
        usersSaved.push({
          id: item.id,
          firstname: item.firstname,
          lastname: item.lastname,
          age: item.age
        })
      })
      console.log(usersSaved);
    })
    conection.end();
    res.render('pages/usuarios', {users: usersSaved})
    
  })

  app.post('/usuarios', (req, res) => {
    res.render('pages/homes')
  })

  app.get('/usuarios/eliminar/:id', (req, res) => {
    conection.query('delete from users where id =' + conection.escape(req.params.id), (err, result) => {
      if(err) throw err;
      console.log(result);
    })
    conection.end();
    res.redirect('/usuarios')
  })

  app.post('/usuarios/modificar' , (req, res) => {
    
  })



}