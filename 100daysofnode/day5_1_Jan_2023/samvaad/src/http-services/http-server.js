'use strict';

const fs = require('fs');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const config = require('./../meta-data/config');
const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Accept, Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

MongoClient.connect(config.mongoUri).then(
    (data) => console.log('mongo connected')
).catch(
    err => console.log(err)
)

app.use(express.json());

app.get('/', function (req, res) {
    res.send('hello');
});

require('./validation-services/lgoin-journey')(app);

module.exports = app;