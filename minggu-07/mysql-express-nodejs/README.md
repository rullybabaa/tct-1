# MENGAMBIL DATA DARI MYSQL MENGGUNAKAN EXPRESS DAN NODEJS

1. Menginstal node js , untuk link downloadnya di bawah ini 
https://nodejs.org/en/download/
saya menggunakan node js yang 32 bit.

folder node js terletak pada direktory C:\Program Files (x86)\nodejs
lalu saya copy kan ke C

2. Setelah menginstal nodejs, maka pada cmd masuk ke direktory C:\nodejs kemudian langkah selanjutnya adalah menginstall framework express
     npm install -g express untuk menginstal express
tunggu sampai proses instalasi selesai

3. setelah selesai, langkah selanjutnya adalah menginstal express generator secara global dengan perintah 
     npm install -g express–generator

4. membuat projek express dengan nama tct7 dengan perintah 
     express tct7 –e 
	 
5. Setelah sellesai maka langkah selanjutnya adalah menginsatal dependencies dengan memasukkan perintah 
     cd tct7 && npm install
	 
6. Mengaktifkan npm dengan sintak
     npm start

	 
	 
7. menginstall mysql dan body-parser.
     npm --save express mysql body-parser

8. membuat package.json pada aplikasi dengan perintah 
     npm init
	 
	 hasil :
	 {
     "name": "nodejs",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "dependencies": {
       "body-parser": "^1.18.3",
       "express": "^4.16.4",
       "mysql": "^2.16.0",
       "npm": "^6.4.1"
     },
     "devDependencies": {},
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "",
    "license": "ISC"
   }

9. membuat database persediaan dan tabel barang menggunakan mysql 
    CREATE TABLE IF NOT EXISTS `barang` (
       `no_inven_brg` char(8) NOT NULL,
       `nm_brg` char(25) DEFAULT NULL,
       `hrg_brg` int(11) DEFAULT NULL
     ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
	 
	 INSERT INTO `barang` (`no_inven_brg`, `nm_brg`, `hrg_brg`) VALUES
     ('B1', 'BANTAL', 50000),
     ('B2', 'GULING', 10000);
	 
10. membuat file utama yaitu server.js
    var express = require('express'),
       app = express(),
       port = process.env.PORT || 3000,
       bodyParser = require('body-parser'),
       controller = require('./controller');

   app.use(bodyParser.urlencoded({ extended: true }));
   app.use(bodyParser.json());

   var routes = require('./routes');
   routes(app);

   app.listen(port);
   console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);
   
11. membuat file koneksi ke database kita, dinamai dengan conn.js

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
   
12. membuat controller untuk codingnya (controller.js)
   'use strict';

   var response = require('./res');
   var connection = require('./conn');

   exports.users = function(req, res) {
       connection.query('SELECT * FROM barang', function (error, rows, fields){
           if(error){
               console.log(error)
           } else{
               response.ok(rows, res)
           }
       });
   };

   exports.index = function(req, res) {
       response.ok("Hello from the Node JS RESTful side!", res)
   };
   
13. membuat res.js untuk mengembalikan data ke dalam bentuk json
   'use strict';

   exports.ok = function(values, res) {
     var data = {
         'status': 200,
         'values': values
     };
     res.json(data);
     res.end();
   };
   
res.json(data) data ini yang akan dikembalikan jadi json
fungsi res.end() adalah fungsi yang dipake untuk nutup koneksi ke database setelah data 
ditampilin ke json.

14. membuat file routes.js untuk routingnya
 file ini digunakan untuk menuliskan routes atau endpoint apa saja yang ada di rest api kita.


15. jalankan server untuk membuka port nya
node server.js

16. akses ke localhost 3000
http://localhost:3000/users

hasil :

![jungkook](https://github.com/ayuwidyainggit/mysql-express-nodejs/blob/master/images/Screenshot_1.png)

   
   