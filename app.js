const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/lesson1', function(req, res){
  res.render('lesson1');
});

app.get('/lesson2', function(req, res){
  res.render('lesson2');
});

app.get('/compose', function (req, res){
  res.render('compose');
});

app.get('/lesson3', function(req, res){
  res.render('lesson3');
});

app.get('/toc', function(req, res){
  res.render('toc');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/signin', function(req, res){
  res.render('signin');
});



app.get('/contact', function(req, res){
  res.render('contact');
});


app.listen(3010, function(req, res){
  console.log("Server running on port 3010");
});
