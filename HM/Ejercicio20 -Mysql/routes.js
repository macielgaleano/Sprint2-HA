module.exports = function(app){
  app.get('/', (req, res) => {
    res.send('home');
  });

  app.get('/usuarios', (req, res) => {
    res.render('pages/usuarios')
  })

  app.post('/usuarios', (req, res) => {
    res.render('pages/homes')
  })

  app.get('/usuarios/eliminar/:id', (req, res) => {
    res.render('pages/home')
  })

  app.post('/usuarios/modificar', (req, res) => {
    res.render('pages/home')
  })



}