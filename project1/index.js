var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'userdetails'
});

var express = require('express');
console.log(typeof express);

var app = express();

app.get("/users", (req, res) => {
    connection.query('select * from userdetails', (err, result) => {
        if  (!err) {
            res.send(result);
    }
    })
});

app.get("/products", (req, res) => {
    connection.query('select * from products', (err, result) => {
        if  (!err) {
            res.send(result);
    
    }
    })
});

app.listen(9000);
