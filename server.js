'use strict';

const express = require('express');
const volleyball = require('volleyball');

const app = express();

const http = require('http');
setInterval(function() {
  http.get("http://steps124335657.herokuapp.com");
}, 300000);

app.use(volleyball);

app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000, function () {
  console.log('Server listening on port', 3000);
});

