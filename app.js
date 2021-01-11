const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

var lessonObject = {
  id: 1,
  chapter: "第一章 | だいいっしょう| Chapter 1",
  lesson: "第一課 | だいいっか | Lesson 1",
  charList: ['食', '読', '学', '視', '観', '見', '行', '来', '会', '買'],
  speakers: [],
  sentences: ['食べる', "読む", '学ぶ', '視る', '観る', '見る', '行く', '来る', 'する', '会う', '買う'],
  translatedSentences: [
  'I/We/He, she/They eat',
  'I/We/He, she/They read',
  'I/We/He, she/They learn',
  'I/We/He, she/They see',
  'I/We/He, she/They see',
  'I/We/He, she/They see',
  'I/We/He, she/They go',
  'I/We/He, she/They go',
  'I/We/He, she/They do',
  'I/We/He, she/They meet',
  'I/We/He, she/They buy'
]
};


app.get('/', function(req, res){
  res.render('index');
});

app.get('/lesson1', function(req, res){
  console.log(lessonObject);
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

app.get('/signup', function(req, res){
  res.render('signup');
});

app.get('/signin', function(req, res){
  res.render('signin');
});

app.get('/post', function (req, res){
  res.render('post', {storedTitle: postTitle})
});

app.get('/lessons/:text', function(req, res) {
    res.render('lessons', {chapter: lessonObject.chapter, lesson: lessonObject.lesson, list: lessonObject.list})
    });

app.get('/contact', function(req, res){
  res.render('contact');
});


app.listen(3010, function(req, res){
  console.log("Server running on port 3010");
});
