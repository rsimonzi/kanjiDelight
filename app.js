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

const lessonsSchema = new mongoose.Schema ({
  idNo: Number,
  pageNumber: String,
  chapter: String,
  lesson: String,
  charList: [String],
  speakers: [String],
  sentences: [String],
  masuSentences: [String],
  translatedSentences: [String],
  grammarPoints: [String],
  word: [String],
  hiragana: [String],
  meaning: [String],
  partOfSpeech: [String],
  pronunciation: [String],
  exercises: [String]
});

const usersSchema = new mongoose.Schema({
  username: String,
  password: String
});

//const User = new mongoose.model("User", userSchema);
//var Schema = new mongoose.Schema({})

const Lesson = mongoose.model("Lesson", lessonsSchema);

//mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});

//const conn = mongoose.createConnection('mongodb://localhost:27017');

//const userSchema = {

//};
const lesson1 = new Lesson({
  idNo: 1,
  pageNumber: '一 | 壱 | 1',
  chapter: "第一章 | だいいっしょう| Chapter 1",
  lesson: "第一課 | だいいっか | Lesson 1",
  charList: ['食', '読', '学', '視', '観',
    '見', '行', '来', '会', '買'
  ],
  speakers: ['スミス', 'ブラウン', 'スミス', 'ブラウン', 'スミス',
    'ブラウン', 'スミス', 'ブラウン', 'スミス', 'ブラウン', 'スミス'
  ],
  sentences: [
    '食べる。', "読む。", '学ぶ。', '視る。', '観る。',
    '見る。', '行く。', '来る。', 'する。', '会う。', '買う。'
  ],
  masuSentences: [
    '食べます。', "読ます。", '学びます。', '視ます。', '観ます。',
    '見ます。', '行きます。', '来ます。', 'します。', '会います。', '買います。'
  ],
  translatedSentences: [
    'I/We/He, She/They eat.',
    'I/We/He, She/They read.',
    'I/We/He, She/They learn.',
    'I/We/He, She/They see.',
    'I/We/He, She/They see.',
    'I/We/He, She/They see.',
    'I/We/He, She/They go.',
    'I/We/He, She/They come.',
    'I/We/He, She/They do.',
    'I/We/He, She/They meet.',
    'I/We/He, She/They buy.'
  ],
  grammarPoints: [
    'In modern Japanese, there are 3 types of verbs – group 1, group 2 and group 3',
    'Group 3 contains only two verbs, する and 来る.',
    'する is called a サ行変格動詞 S row irregular verb.',
    'くる　is called a カ行変格動詞 K row irregular verb.',
    'Since these two verbs are irregular, you need to memorize each conjugation.',
    'Group 2 verbs 上一段動詞 Kami ichidan verbs are verbs that end in いる or える',
    'Group 1 verbs are all verbs not in Group 2 or Group 3 – they are called 五段動詞　Godan verbs.'
  ],
  word: ['食べる', '行く'],
  hiragana: ['たべる', 'いく'],
  meaning: ['to eat', 'to go'],
  partOfSpeech: ['動詞 | どうし | verb', '動詞 | どうし | verb'],
  pronunciation: ['taberu.mp3', 'iku.mp3'],
  exercises: ['食べる', '時々行く']
});

const lesson2 = new Lesson({
  idNo: 2,
  pageNumber: '二 | 弐 | 2',
  chapter: "第一章 | だいいっしょう| Chapter 1",
  lesson: "第二課 | だい二か | Lesson 2",
  charList: ['出', '時', '山', '本', '外'],
  speakers: ['ブラウン', 'スミス', 'ブラウン', 'スミス',
    'ブラウン', 'スミス', 'ブラウン', 'スミス',
    'ブラウン', 'スミス', 'スミス', 'ブラウン', 'スミス'
  ],
  sentences: [
    '時々食べる。', "本を読む。", '時々学ぶ。', '山を視る。',
    '本を観る。', '時々見る。', '外に行く。', '山から来る。', '時々する。',
    'スミスさんに会う。', '本を買う。', '外に出る。', '山に出る。'
  ],
  translatedSentences: [
    'I/We/He, She/They eat sometimes.',
    'I/We/He, She/They read a book.',
    'I/We/He, She/They learn sometimes.',
    'I/We/He, She/They see a mountain.',
    'I/We/He, She/They see a book.',
    'I/We/He, She/They see sometimes.',
    'I/We/He, She/They go outside.',
    'I/We/He, She/They come from the mountain.',
    'I/We/He, She/They sometimes do.',
    'I/We/He, She/They meet Mr. Smith.',
    'I/We/He, She/They buy a book.',
    'I/We/He, She/They are going outside.',
    'I/We/He, She/They are leaving the mountain.'
  ],
  grammarPoints: [
    'In both modern Japanese and classical Japanese, every verb ends in う u in dictionary form.',
    'Dictionary form in modern Japanese is called 辞書形 | じしょけい.',
    'In classical Japanese, dictionary form is called the 終止形 |しゅうしけい.',
    'The 々character means the same character twice.',
    'から is a particle that means “from”.',
    'に is a particle with multiple meanings – here it means “to”, “in the direction of” when referring to a place.',
    'にis also used with the verb “会う” to indicate the person you are meeting.',
    'を is a particle that indicates a direct object, i.e. what you are buying or seeing.'
  ],
  word: [],
  hiragana: [],
  meaning: [],
  partOfSpeech: [],
  pronunciation: []
});

const lesson3 = new Lesson({
  idNo: 3,
  pageNumber: '三 | 参 | 3',
  chapter: "第一章 | だいいっしょう| Chapter 1",
  lesson: "第三課 | だいさんか | Lesson 3",
  charList: ['一', '二', '三', '部', '今', '東', '日', '使'],
  speakers: ['ブラウン', 'スミス', 'ブラウン', 'スミス',
    'ブラウン', 'スミス', 'ブラウン', 'スミス',
    'ブラウン', 'スミス', 'スミス', 'ブラウン', 'スミス', 'ブラウン', 'スミス', 'ブラウン', 'スミス'
  ],
  sentences: [
    '時々使う。', "一部読む。", '今学ぶ。', '山を視る。',
    '日を観る。', '時々見る。', '東に行く。', '外から来る。', '時々する。',
    'スミスさんに会う。', '本を買う。', '外に出る。', '山に出る。',
    '一時に読む。', '二時に出る。', '三時に来る。', 'ブラウンさんに会う。'
  ],
  translatedSentences: [
    'I/We/He, she/They use it sometimes.',
    'I/We/He, she/They read one part.',
    'I/We/He, she/They learn now.',
    'I/We/He, she/They see a mountain.',
    'I/We/He, she/They see the sun.',
    'I/We/He, she/They see it sometimes.',
    'I/We/He, she/They go east.',
    'I/We/He, she/They come from outside.',
    'I/We/He, she/They do it sometimes.',
    'I/We/He, she/They meet Mr. Smith.',
    'I/We/He, she/They buy a book.',
    'I/We/He, she/They are going outside.',
    'I/We/He, she/They are leaving the mountain.',
    'I/We/He, she/They read at one o’clock.',
    'I/We/He, she/They are leaving at two o’clock.',
    'I/We/He, she/They come at three o’clock.',
    'I/We/He, she/They meet Mr. Brown.'
  ],
  grammarPoints: [
    'When used with time, such as one o’clock, に indicates an exact time.',
    'If you do not want to state an exact time, then do not include the particle に, i.e., then say 一時出る.'
  ],
  word: [],
  hiragana: [],
  meaning: [],
  partOfSpeech: [],
  pronunciation: []
});

const lesson4 = new Lesson({
  idNo: 4,
  pageNumber: '四 | 4',
  chapter: "第一章 | だいいっしょう| Chapter 1",
  lesson: "第四課 | だいよんか | Lesson 4",
  charList: ['五', '月', '車', '色', '形'],
  speakers: ['スミス', 'ブラウン', 'スミス', 'ブラウン', 'スミス',
    'ブラウン', 'スミス', 'ブラウン', 'スミス', 'ブラウン', 'スミス'
  ],
  sentences: [
    '五部使う。', "一部読む。", '三部学ぶ。', '形を視る。', '日を観る。',
    '月を見る。', '外に行く。', '東から来る。', '五時にする。', '色々な本を買う。', '車を買う。'
  ],
  translatedSentences: [
    'I/We/He, she/They use five parts.',
    'I/We/He, she/They read one part.',
    'I/We/He, she/They learn three parts.',
    'I/We/He, she/They see a pattern.',
    'I/We/He, she/They see the sun.',
    'I/We/He, she/They see the moon.',
    'I/We/He, she/They go outside.',
    'I/We/He, she/They come from the east.',
    'I/We/He, she/They do it at five o’clock.',
    'I/We/He, she/They buy various books.',
    'I/We/He, she/They buy a car.'
  ],
  grammarPoints: [
    '',
    '',
    '',
    '',
    ''
  ],
  word: [],
  hiragana: [],
  meaning: [],
  partOfSpeech: [],
  pronunciation: []
});

const lesson5 = new Lesson({
  idNo: 5,
  pageNumber: '五 | 伍 | 5',
  chapter: "第一章 | だいいっしょう| Chapter 1",
  lesson: "第五課 | だいごか | Lesson 5",
  charList: ['十', '先', '大', '人', '田'],
  speakers: ['スミス', 'ブラウン', 'スミス', 'ブラウン', 'スミス',
    'ブラウン', 'スミス', 'ブラウン', 'スミス', 'ブラウン', 'スミス'
  ],
  sentences: [
    '人を観る。', "十部読む。", '田から来る。', '大きい車を買う。', '色々な人を視る。',
    '月を見る。', '外に行く。', '東から来る。', '十時にする。', '色々な本を買う。', '車を買う。'
  ],
  translatedSentences: [
    'I/We/He, she/They see a person.',
    'I/We/He, she/They read ten parts.',
    'I/We/He, she/They come from the field.',
    'I/We/He, she/They buy a large car.',
    'I/We/He, she/They see various people.',
    'I/We/He, she/They see the moon.',
    'I/We/He, she/They go outside.',
    'I/We/He, she/They come from the east.',
    'I/We/He, she/They do it at ten oclock.',
    'I/We/He, she/They buy various books.',
    'I/We/He, she/They buy a car.',
  ],
  grammarPoints: [
    '',
    '',
    '',
    '',
    ''
  ],
  word: [],
  hiragana: [],
  meaning: [],
  partOfSpeech: [],
  pronunciation: []
});

const lesson6 = new Lesson({
  idNo: 6,
  pageNumber: '六 | 陸 | 6',
  chapter: "第一章 | だいいっしょう| Chapter 1",
  lesson: "第六課 | だいろくか | Lesson 6",
  charList: ['者', '週', '四', '川', '赤'],
  speakers: ['スミス', 'ブラウン', '山本', '山田', 'スミス',
    'ブラウン', '山本', '山田', '山本', '山田', 'スミス'
  ],
  sentences: [
    '学者に会う。', "十一時に出る。", '川から来る。', '赤車を買う。', '四時にする。',
    '月を見る。', '今週行く。', '東から来る。', '今日本を買う。', '人に会う。'
  ],
  translatedSentences: [
    'I/We/He, she/They meet a scholar.',
    'I/We/He, she/They leave at eleven oclock.',
    'I/We/He, she/They come from the river.',
    'I/We/He, she/They buy a red car.',
    'I/We/He, she/They do it at four oclock.',
    'I/We/He, she/They see the moon.',
    'I/We/He, she/They go this week.',
    'I/We/He, she/They come from the east.',
    'I/We/He, she/They read today.',
    'I/We/He, she/They meet a person.'
  ],
  grammarPoints: [
    '',
    '',
    '',
    '',
    ''
  ],
  word: [],
  hiragana: [],
  meaning: [],
  partOfSpeech: [],
  pronunciation: []
});

const lesson7 = new Lesson({
  idNo: 7,
  pageNumber: '七 | 漆 | 7',
  chapter: "第一章 | だいいっしょう| Chapter 1",
  lesson: "第七課 | だいななか | Lesson 7",
  charList: ['国', '小', '書', '口', '方'],
  speakers: ['山本', '川田', '川本', '山田', '山本',
    '川田', '川本', '山田', '山本', '川田', '川本'
  ],
  sentences: [
    '学者に会う。', "出口に行く。", '外国から来る。', '小さい田を買う。', '四時にする。',
    '今月川に行く。', '来週行く。', '東の方から来る。', '今日本を買う。', '本を書く。'
  ],
  translatedSentences: [
    'I/We/He, she/They meet a scholar next month.',
    'I/We/He, she/They go to the exit.',
    'I/We/He, she/They come from a foreign country.',
    'I/We/He, she/They buy a small field.',
    'I/We/He, she/They do it at four oclock.',
    'I/We/He, she/They go to the river this month.',
    'I/We/He, she/They go next week.',
    'I/We/He, she/They come from the east.',
    'I/We/He, she/They buy a book today.',
    'I/We/He, she/They write a book.'
  ],
  grammarPoints: [
    '',
    '',
    '',
    '',
    ''
  ],
  word: [],
  hiragana: [],
  meaning: [],
  partOfSpeech: [],
  pronunciation: []
});

const lesson8 = new Lesson({
  idNo: 8,
  pageNumber: '八 | 捌 | 8',
  chapter: "第一章 | だいいっしょう| Chapter 1",
  lesson: "第八課 | だいはちか | Lesson 8",
  charList: ['働', '州', '生', '九', '長'],
  speakers: ['山本', '川田', '川本', '山田', '山本',
    '川田', '川本', '山田', '山本', '川田', '川本', '山本', '川田', '川本', '山田'
  ],
  sentences: [
    '来月外国に行く。', "九部使う。", '今大きい本を読む。', '九部学ぶ。', '長い形を視る。',
    '先生を観る。', '時々月を見る。', '本州に行く。', '東京から来る。', '九時時にする。',
    '学生に会う。', '出口に行く。', '今日色々な本を買う。', '日本人に会う。', '今週十一時に働く。'
  ],
  translatedSentences: [
    'I/We/He, she/They go to a foreign country next month.',
    'I/We/He, she/They use nine parts.',
    'I/We/He, she/They read a large book now.',
    'I/We/He, she/They learn nine parts.',
    'I/We/He, she/They see a long pattern.',
    'I/We/He, she/They see the teacher.',
    'I/We/He, she/They see the moon sometimes.',
    'I/We/He, she/They go to Honshu.',
    'I/We/He, she/They come from Tokyo.',
    'I/We/He, she/They do it at nine oclock.',
    'I/We/He, she/They meet a university student.',
    'I/We/He, she/They go to the exit.',
    'I/We/He, she/They buy various books today.',
    'I/We/He, she/They meet a Japanese person.',
    'I/We/He, she/They work at eleven o’clock this week.'
  ],
  grammarPoints: [
    '',
    '',
    '',
    '',
    ''
  ],
  word: [],
  hiragana: [],
  meaning: [],
  partOfSpeech: [],
  pronunciation: []
});

const lesson9 = new Lesson({
  idNo: 9,
  pageNumber: '八 | 捌 | 9',
  chapter: "第一章 | だいいっしょう| Chapter 1",
  lesson: "第九課 | だいきゅうか | Lesson 9",
  charList: ['語', '銀', '崎', '阪', '中'],
  speakers: ['山本', '川田', '川本', '山田', '山本',
    '川田', '川本', '山田', '山本', '川田', '川本', '山本', '川田', '川本', '山田'
  ],
  sentences: [
    '今月崎に行く。', "三十九部使う。", '今小さい本を書く。', '二十部学ぶ。', '長い阪を視る。',
    '川田先生を観る。', '銀色の車を買う。', '中国に行く。', '四月東京から来る。', '五時にする。',
    '大学生に会う。', '今語る。', '今日色々な人を観る。', '大使に会う。', '来週十二時に働く。'
  ],
  translatedSentences: [
    'I/We/He, she/They go to the cape this month.',
    'I/We/He, she/They use thirty-nine parts.',
    'I/We/He, she/They write a small book now.',
    'I/We/He, she/They learn twenty parts.',
    'I/We/He, she/They see a long slope.',
    'I/We/He, she/They see Professor Kawada.',
    'I/We/He, she/They are buying a silver-colored car.',
    'I/We/He, she/They go to China.',
    'I/We/He, she/They come from Tokyo in April.',
    'I/We/He, she/They do it at five oclock.',
    'I/We/He, she/They meet a university student.',
    'I/We/He, she/They speak now.',
    'I/We/He, she/They see various people today.',
    'I/We/He, she/They meet the ambassador.',
    'I/We/He, she/They work at twelve oclock next week.'
  ],
  grammarPoints: [
    '',
    '',
    '',
    '',
    ''
  ],
  word: [],
  hiragana: [],
  meaning: [],
  partOfSpeech: [],
  pronunciation: []
});

const lesson10 = new Lesson({
  idNo: 10,
  pageNumber: '十 | 拾 | 10',
  chapter: "第一章 | だいいっしょう| Chapter 1",
  lesson: "第十課 | だいじゅうか | Lesson 10",
  charList: ['市', '社', '村', '方', '森'],
  speakers: ['山本', '川田', '川本', '山田', '山本',
    '川田', '川本', '山田', '山本', '川田', '川本', '山本', '川田', '川本', '川田'
  ],
  sentences: [
    '来月四国に行く。', "国会で働く。", '九月山口に行く。', '日本語で語る。', '社から来る。',
    '森を観る。', '今月村に行く。', '長い形を視る。', '時々日を見る。', '東の方に行く。',
    '一時時にする。', '山本大使に会う。', '今市に行く。', '今日色々な本を書く。', '中国人に会う。'
  ],
  translatedSentences: [
    'I/We/He, she/They go to Shikoku next month.',
    'I/We/He, she/They work at the Diet.',
    'I/We/He, she/They go to Yamaguchi in September.',
    'I/We/He, she/They speak in Japanese.',
    'I/We/He, she/They come from the shrine.',
    'I/We/He, she/They see the forest.',
    'I/We/He, she/They go to the village this month.',
    'I/We/He, she/They see a long pattern.',
    'I/We/He, she/They see the sun sometimes.',
    'I/We/He, she/They go eastward/toward the east.',
    'I/We/He, she/They do it at one oclock.',
    'I/We/He, she/They meet Ambassador Yamamoto.',
    'I/We/He, she/They go to the city.',
    'I/We/He, she/They write various books today.',
    'I/We/He, she/They meet a Chinese person.'
  ],
  grammarPoints: [
    '',
    '',
    '',
    '',
    ''
  ],
  word: [],
  hiragana: [],
  meaning: [],
  partOfSpeech: [],
  pronunciation: []
});

const lesson11 = new Lesson({
  idNo: 11,
  pageNumber: '十一 | 拾壱 | 1',
  chapter: "第二章 | だいにしょう| Chapter 2",
  lesson: "第十一課 | だいじゅうか | Lesson 11",
  charList: ['市', '社', '村', '方', '森'],
  speakers: ['山本', '川田', '川本', '山田', '山本',
    '川田', '川本', '山田', '山本', '川田', '川本', '山本', '川田', '川本', '山本'
  ],
  sentences: [
    '来月四国に行く。', "国会で働く。", '九月山口に行く。', '日本語で語る。', '社から来る。',
    '森を観る。', '今月村に行く。', '長い形を視る。', '時々日を見る。', '東の方に行く。',
    '一時時にする。', '山本大使に会う。', '今市に行く。', '今日色々な本を書く。', '中国人に会う。'
  ],
  translatedSentences: [
    'I/We/He, she/They go to Shikoku next month.',
    'I/We/He, she/They work at the Diet.',
    'I/We/He, she/They go to Yamaguchi in September.',
    'I/We/He, she/They speak in Japanese.',
    'I/We/He, she/They come from the shrine.',
    'I/We/He, she/They see the forest.',
    'I/We/He, she/They go to the village this month.',
    'I/We/He, she/They see a long pattern.',
    'I/We/He, she/They see the sun sometimes.',
    'I/We/He, she/They go eastward/toward the east.',
    'I/We/He, she/They do it at one oclock.',
    'I/We/He, she/They meet Ambassador Yamamoto.',
    'I/We/He, she/They go to the city.',
    'I/We/He, she/They write various books today.',
    'I/We/He, she/They meet a Chinese person.'
  ],
  grammarPoints: [
    '',
    '',
    '',
    '',
    ''
  ],
  word: [],
  hiragana: [],
  meaning: [],
  partOfSpeech: [],
  pronunciation: []
});


const defaultLessons = [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7, lesson8, lesson9, lesson10];

Lesson.insertMany(defaultLessons, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("default Lessons successfully saved to DB");
  }
});

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/tategaki', function(req, res) {
  res.render('tategaki');
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

app.post('/signup', function(req, res){
  const newUser = new User({
    password: req.body.password,
    username: req.body.email
  });

    newUser.save(function(err){
    if (err){
      console.log(err);
      console.log("Username and password NOT saved.");
    } else {
      console.log("Username and Password saved.");
      res.render('lessons');
    }
  });
});

app.post('/signin', function(req, res){
  const username = req.body.email;
  const password = req.body.password;

  User.findOne({email: username}, function(err, foundUser){
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          res.render("lessons");
        }
      }
    }
  });
});

app.get('/signin', function(req, res) {
  res.render('signin');
});

app.get('/post', function(req, res) {
  res.render('post', {
    storedTitle: postTitle
  })
});

app.get('/lessons/:requestedIdNo', function(req, res) {
  const requestedIdNo = req.params.requestedIdNo;
  Lesson.findOne({
    idNo: requestedIdNo
  }, function(err, foundLesson) {
    if (!err) {
      if (!foundLesson) {
        console.log('No Lesson Found');
      } else {
        res.render('lessons', {
          pageNo: foundLesson.pageNumber,
          chapter: foundLesson.chapter,
          lesson: foundLesson.lesson,
          list: foundLesson.charList,
          speakers: foundLesson.speakers,
          sentences: foundLesson.sentences,
          masuSentences: foundLesson.masuSentences,
          translatedSentences: foundLesson.translatedSentences,
          grammarPoints: foundLesson.grammarPoints,
          word: foundLesson.word,
          hiragana: foundLesson.hiragana,
          meaning: foundLesson.meaning,
          partOfSpeech: foundLesson.partOfSpeech,
          pronunciation: foundLesson.pronunciation,
          exercises: foundLesson.exercises
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
