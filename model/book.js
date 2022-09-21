const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({

    name:{
       type: String,
       required: true,
    },
    author:{
        type: String,
        required: true,
     },
     body:{
        type: String,
        required: true,
     },
     alttext:{
        type: String,
     },
     image:{
        data: Buffer,
        contentType: String,
     }
},{timestamps:true});

const Book = mongoose.model('book', bookSchema);


module.exports = Book