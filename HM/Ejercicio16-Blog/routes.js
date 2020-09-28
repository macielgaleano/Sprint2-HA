module.exports = function(app){
  const url = 'https://gist.githubusercontent.com/SuecoMarcus/440d8206cbf0e3e9491d0c431c0e19b6/raw/cba8bb296345af148ff5e646bbc5d76900e4e4d7/posts.json';
  global.fetch = require("node-fetch");

  let articles_home = [];

  async function getArticlesForHome(){
    try {
      let response = await fetch(url);
      let data = await response.json();
      return data; 
    } catch (error) {
      return error;
    }
    
  }

  app.get('/', (req,res) => {
    getArticlesForHome()
    .then(
      (data => {
        data.map((item, index, arr) => {
          contentShorted =  () => {
            if( item.content.length < 50) {
              return item.content
            }else if( item.content.length > 50){
              return item.content.substr(3,50) + '...'
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
    res.render('pages/home', {articles_home: articles_home});
  })
  
  

  app.get('/articulo/:id', (req,res) => {
    getArticlesForHome()
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          if(Number(data[i].id) === req.params.id){  
            res.render('pages/article', {
              id: data[i].id,
              title: data[i].title,
              content: data[i].content,
              img_link: data[i].image,
              author: data[i].author
            })
          }
        }
      })
  })
}