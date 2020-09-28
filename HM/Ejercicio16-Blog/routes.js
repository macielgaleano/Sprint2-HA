module.exports = function(app){
  const url = 'https://gist.githubusercontent.com/SuecoMarcus/440d8206cbf0e3e9491d0c431c0e19b6/raw/cba8bb296345af148ff5e646bbc5d76900e4e4d7/posts.json';
  const axios = require('axios');
  global.fetch = require("node-fetch");

  let articles_home = [];

  app.get('/', (req,res) => {
    async function getArticlesForHome(){
      let response = await fetch(url);
      let data = await response.json();
      return data; 
    }
    getArticlesForHome()
    .then(
      (data => {
       
        data.map((item, index, arr) => {
          contentShorted =  () => {
            if( item.content.length < 50) {
              return item.content
            }else if( item.content.length > 50){
              return item.content.substr(1,50) + '...'
            }
          }
          articles_home.push({
            id: item.id,
            title: item.title,
            content: contentShorted()
          })
        })
      })
    );
    res.render('pages/home', {articles: articles_home});
  })
  
  

  app.get('/articulo/:id', (req,res) => {

  })
}