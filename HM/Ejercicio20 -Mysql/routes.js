module.exports = function(app){

  const mysql = require('mysql');
  const axios = require('axios');
  const { body,check, validationResult } = require('express-validator');
  
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

  app.post('/usuarios',[
    //Comprabate sizes
    body('nombre').not().isEmpty().trim().escape(),
    body('apellido').not().isEmpty().trim().escape(),
    body('nombre').isLength({ min: 3 }).withMessage('El nombre requiere mas de 3 caracteres'),
    body('apellido').isLength({ min: 3 }).withMessage('El apellido requiere masde 3 caracteres'),
    check('edad').matches(/[0-9]{2}/).withMessage('La edad no es valida')
  ],(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
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

  app.post('/usuarios/modificar' , [
    check('id').matches(/[0-9]{1,2}?/).withMessage('El id no es valido'),
    body('nombre').not().isEmpty().trim().escape(),
    body('apellido').not().isEmpty().trim().escape(),
    body('nombre').isLength({ min: 3 }).withMessage('El nombre requiere mas de 3 caracteres'),
    body('apellido').isLength({ min: 3 }).withMessage('El apellido requiere masde 3 caracteres'),
    check('edad').matches(/[0-9]{2}/).withMessage('La edad no es valida')
  ], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    miQuery(`select * from users where id = ${connection.escape(req.body.id)}`, (user) => {
      let nombre,
          apellido,
          edad;
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