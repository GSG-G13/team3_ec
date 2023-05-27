/* eslint-disable import/extensions */
// require('dotenv').config()

const express = require('express');

const cookieParser = require('cookie-parser');
const router = require('./routers/router.js');
const cors = require('cors');
require('dotenv').config()
const { join } = require('path')



const app = express();

const { PORT } = process.env;

app.set('port', PORT || 5000);

app.use(cookieParser());
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




 app.use(express.static(join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../client/dist/index.html'))
})
app.use('/api/v1',router);


module.exports = app;
