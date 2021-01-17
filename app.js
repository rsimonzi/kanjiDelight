const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost: 27017/kanjiDelightDB', {
  useNewUrlParser: true
});

const lessonsSchema = {
  idNo: Number,
  pageNumber: String,
  chapter: String,
  lesson: String,
  charList: [String],
  speakers: [String],
  sentences: [String],
  translatedSentences: [String],
  grammarPoints: [String]
}

const Lesson = mongoose.model("Lesson", lessonsSchema);

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/compose', function(req, res) {
  res.render('compose');
});

app.get('/toc', function(req, res) {
  res.render('toc');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/signup', function(req, res) {
  res.render('signup');
});

app.get('/signin', function(req, res) {
  res.render('signin');
});

app.get('/post', function(req, res) {
  res.render('post', {
    storedTitle: postTitle
  })
});

app.get('/lessons/:requestedIdNo', function(req, res){
  const requestedIdNo = req.params.requestedIdNo;
  Lesson.findOne({idNo: requestedIdNo}, function(err, foundLesson){
    if(!err){
      if(!foundLesson){
        console.log('No Lesson Found');
      } else {
        res.render('lessons', {
          pageNo: foundLesson.pageNumber,
          chapter: foundLesson.chapter,
          lesson: foundLesson.lesson,
          list: foundLesson.charList,
          speakers: foundLesson.speakers,
          sentences: foundLesson.sentences,
          translatedSentences: foundLesson.translatedSentences,
          grammarPoints: foundLesson.grammarPoints
        });
      }
    }
  })
});

app.get('/contact', function(req, res) {
        res.render('contact');
      });

      app.listen(3010, function(req, res) {
        console.log("Server running on port 3010");
      });
