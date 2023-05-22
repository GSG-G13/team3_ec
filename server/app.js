/* eslint-disable import/extensions */
// require('dotenv').config()

import express from 'express';
//import { join } from 'path';
import cookieParser from 'cookie-parser';
import router from './routers/router.js';

import { } from 'dotenv/config';

// const cookieParser = require('cookie-parser')

// const { join } = require('path')

// import router from './routers/router'

const app = express();

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static(join(__dirname, '..', 'public')));

const { PORT } = process.env;

app.set('port', PORT || 5000);

app.use(router);

export default app;
