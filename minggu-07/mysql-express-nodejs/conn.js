var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "persediaan"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;