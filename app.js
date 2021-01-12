const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

let lessonObject = [{
  id: 1,
  pageNumber: '一 | 壱 | 1',
  chapter: "第一章 | だいいっしょう| Chapter 1",
  lesson: "第一課 | だいいっか | Lesson 1",
  charList: ['食', '読', '学', '視', '観',
   '見', '行', '来', '会', '買'],
  speakers: ['スミス', 'ブラウン', 'スミス', 'ブラウン', 'スミス',
  'ブラウン', 'スミス', 'ブラウン', 'スミス', 'ブラウン', 'スミス'],
  sentences: [
    '食べる', "読む", '学ぶ', '視る', '観る',
    '見る', '行く', '来る', 'する', '会う', '買う'],
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
],
  grammarPoints: [
'In modern Japanese, there are 3 types of verbs – group 1, group 2 and group 3',
'Group 3 contains only two verbs, する and 来る known as サ行変格動詞 S row irregular verb and カ行変格動詞 K row irregular verb.',
'Since these verbs are irregular, you need to memorize each conjugation.',
'Group 2 verbs 上一段動詞 Kami ichidan verbs are verbs that end in いる or える',
'Group 1 verbs are all other verbs that are not in Group 2 or Group 3 – they are called 五段動詞　Godan verbs.'
  ]},
{
  id: 2,
  pageNumber: '二 | 弐 | 2',
  chapter: "第一章 | だいいっしょう| Chapter 1",
  lesson: "第二課 |　だい二か | Lesson 2",
  charList: ['出', '時', '山', '本', '外'],
  speakers: ['ブラウン', 'スミス', 'ブラウン', 'スミス',
   'ブラウン', 'スミス', 'ブラウン', 'スミス',
   'ブラウン', 'スミス','スミス', 'ブラウン', 'スミス'],
  sentences: [
    '時々食べる', "本を読む", '時々学ぶ', '山を視る',
  '本を観る', '時々見る', '外に行く', '山から来る', '時々する',
  'スミスさんに会う', '本を買う', '外に出る', '山に出る'
  ],
  translatedSentences: [
  'I/We/He, she/They eat sometimes',
  'I/We/He, she/They read a book',
  'I/We/He, she/They learn sometimes',
  'I/We/He, she/They see a mountain',
  'I/We/He, she/They see a book',
  'I/We/He, she/They see sometimes',
  'I/We/He, she/They go outside',
  'I/We/He, she/They come from the mountain',
  'I/We/He, she/They sometimes do',
  'I/We/He, she/They meet Mr. Smith',
  'I/We/He, she/They buy a book',
  'I/We/He, she/They are going outside',
  'I/We/He, she/They are leaving the mountain'
],
grammarPoints: [
'In modern Japanese, there are 3 types of verbs – group 1, group 2 and group 3',
'Group 3 contains only two verbs, する and 来る known as サ行変格動詞 S row irregular verb and カ行変格動詞 K row irregular verb.',
'Since these verbs are irregular, you need to memorize each conjugation.',
'Group 2 verbs 上一段動詞 Kami ichidan verbs are verbs that end in いる or える',
'Group 1 verbs are all other verbs that are not in Group 2 or Group 3 – they are called 五段動詞　Godan verbs.'
]}
];


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
  res.render('lessons', {
    pageNo: lessonObject[1].pageNumber,
    chapter: lessonObject[1].chapter,
    lesson: lessonObject[1].lesson,
    list: lessonObject[1].charList,
    speakers: lessonObject[1].speakers,
    sentences: lessonObject[1].sentences,
    translatedSentences: lessonObject[1].translatedSentences,
    grammarPoints: lessonObject[1].grammarPoints
  })
});

app.get('/contact', function(req, res){
  res.render('contact');
});


app.listen(3010, function(req, res){
  console.log("Server running on port 3010");
});
