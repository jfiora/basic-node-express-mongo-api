const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = mongoose.connect('mongodb://localhost/botapi');
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel.js');
//const Author = require('./models/authorModel.js');
const bookRouter = require('./routes/bookRouter')(Book);
//const authorRouter = require('./routes/authorRouter')(Author);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('alla le hacen request');
});

app.listen(port, () => {
    console.log('Running on port: ' + port);
});