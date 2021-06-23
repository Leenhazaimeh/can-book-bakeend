const express = require('express');
const app = express();

const mongoose = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT;
const {getBooks, createBook, updateBook, deleteBook} = require('./controllers/books.controller');
const seedUserData  = require('./models/user.model');

const cors = require('cors');
app.use(cors());

app.use(express.json());

mongoose.connect(process.enve.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
);



seedUserData();

app.get('/books', getBooks);
app.post('/book', createBook);
app.put('/book/:book_idx', updateBook);
app.delete('/book/:book_idx', deleteBook)
app.listen(PORT);





