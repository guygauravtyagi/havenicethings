'use strict';

let fs = require('fs');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/login', function(req, res) {
    console.log(req.body);
});

module.exports = app;