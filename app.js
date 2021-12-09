const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

/*if (process.env.ENV === 'Test') {
    console.log('Testing');
    const db = mongoose.connect('mongodb://localhost/botapi_Test');
} else {
    console.log('Prod');*/
const db = mongoose.connect('mongodb://localhost/botapi', { useNewUrlParser: true });
//}

const port = process.env.PORT || 3000;
const Book = require('./models/bookModel.js');
//const Author = require('./models/authorModel.js');
const bookRouter = require('./routes/bookRouter')(Book);
//const authorRouter = require('./routes/authorRouter')(Author);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('api working :)');
});

app.server = app.listen(port, () => {
    console.log('Running on port: ' + port);
});

module.exports = app;
