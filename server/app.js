// require('dotenv').config()

import express from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
// const cookieParser = require('cookie-parser')

// const { join } = require('path')

// import router from './routers/router'

const app = express();

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static(join(__dirname, '..', 'public')));

app.set('port', process.env.PORT || 5000);

// app.use(router);

export default app;
