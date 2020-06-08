const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());



require('dotenv').config();


const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());