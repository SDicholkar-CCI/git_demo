const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/users');
const scratchCard = require('./routes/scratchCard');
const transaction = require('./routes/transaction');
var cors = require('cors')
const app = express();

/* TODO: Replace for FE application URL with 'http://localhost:3001' if you get CORS error */
var corsOptions = {
    origin: 'http://localhost:8080',
}
app.use(cors(corsOptions))

mongoose.connect('mongodb://root:rootpassword@localhost:29020/scratchCard?authSource=admin', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDb...'))
    .catch(error => console.log('Could not connect to MongoDb...', error));

app.use(express.json());
app.use('/user', user);
app.use('/scratchCard', scratchCard);
app.use('/transaction', transaction);

app.listen(3000, () => console.log(`started port new branch`));