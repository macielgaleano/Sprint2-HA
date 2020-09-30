const connection_params = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
};

const miQuery = (query, cb) => {
  const connection = mysql.createConnection({connection_params});
  connection.connect(function(err){
    if(err) throw err;
    connection.query(query, (err, users) => {
      if(err) throw err;
      connection.end();
      cb(users);
    })
  }); 
}

export module user_db;