const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.get('/', function(req, res){
  console.log("using the GET function");
});

app.listen(3010, function(req, res){
  console.log("Server running on port 3010");
})
