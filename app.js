const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const Book = require('./model/book.js')

const app = express();
const port = process.env.PORT || 3000;

app.listen(port);

app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');

const dbURI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.mtmsbaq.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(dbURI)
     .then(result =>{
         console.log("database connected");
         app.listen(port);
         console.log('server running at ' + port);


     })
     .catch(err =>{
         console.log(err)
     })


app.get('/',(req,res) =>{

    Book.find().sort({ createdAt: -1})
        .then(result => {
            res.render('index' , {bookarray:result});

        })
        .catch(err => {console.log(err)});
})

