const express = require("express");
const mysql = require("mysql");

const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const bodyParser = require('body-parser');

var flash = require('express-flash')
var cookieParser = require('cookie-parser');
var session = require('express-session');

// Create  connection
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database: 'nodemysql'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("MySQL Connected!");
});

var app = express();
const cors = require("cors");
// Set security header
app.use(helmet());
// Prevent XSS attacks
app.use(xss());
// Prevent HTTP Parameter Polution
app.use(hpp());
app.use(cors());

// Create DB
app.get('/createdb', (req,res)=> {
    let sql = "CREATE DATABASE nodemysql";
    db.query(sql, (err, result)=> {
        if(err) throw err;
        console.log(result);
        res.send('database created...');
     });
});

// Create Table
app.get('/createbookstable', (req,res)=>{
    let sql = "CREATE TABLE books(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('books table created')
    })
})

// Insert book 1
app.post('/addbook1', (req,res)=> {
    let book = {title:'Book Two', body: "This is the book number two"};
    let sql = "INSERT INTO books SET ?";
    let query = db.query(sql, book, (err,result) => {
        if(err) throw err;
        console.log(JSON.stringify(result));
        //res.send(result)
    });
})

app.get('/getbooks', (req,res) => {
    let sql = 'SELECT * FROM Books';
    let query = db.query(sql, (err,result) => {
        if(err) throw err;
        console.log('books fetched!');
        res.send(JSON.stringify(result))
    })
})

// Select book
app.get('/getbookone', (req,res)=> {
    let sql = "SELECT * FROM Books WHERE title = 'Book One' ";
    let query = db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result)
    });
});

// Select book with id
app.get('/getbookone/:id', (req,res)=> {
    let sql = `SELECT * FROM Books WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

// Update book 
app.put('/updatebooks/books/:id', (req,res)=> {
    console.log(req.params);
    //let sql = "UPDATE books SET title = ? WHERE id = ?";
    let sql = `UPDATE books SET ? WHERE id = ${req.params.id}`;
    //filter = [newTitle, req.params.id];
    let book1 = {
        title: "Test Book",
        body: "Test Body",
        taken: 1
    }
    let book = {
        title: req.body.title,
        body: req.body.body,
        taken: req.body.taken
    }
    let query = db.query(sql, book1, (err,result) => {
        if(err) throw err;
        console.log("put request success!");
        
    });
    console.log(query);
    res.send(req.body.title);
    // req.getConnection(function(error, conn) {
    //     conn.query('UPDATE book SET ? WHERE id = ' + req.params.id, function(err,result) {
    //         if(err) req.flash('error', err)

    //         res.render('book/edit', {
    //             title: req.body.title,
    //             body: req.body.body,
    //             taken: req.body.taken
    //         })
    //     })
    // })

});

// Delete book 
app.delete('/deletebook/:id', (req,res)=> {
    let sql = "DELETE FROM books WHERE id = ?";
    filter = [req.params.id]
    let query = db.query(sql, filter, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.listen('3000', ()=> {
    console.log("Server started on port 3000");
});

module.exports = app;