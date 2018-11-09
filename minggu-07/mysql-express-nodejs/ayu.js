var mysql = require('mysql');

const express = require('express')
const app = express()
const port = 3000

app.get('/barang', function (req, res) {

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
	database : "persediaan"
});

module.exports = db;

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

let sql = "SELECT * FROM barang";
 res.send('POST request to the homepage')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))