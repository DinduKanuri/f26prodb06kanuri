var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


require('dotenv').config();

const mongoose = require('mongoose');
const connectionString = process.env.MONGO_CON;

// Connect to MongoDB Atlas
if (!connectionString) {
  console.error('MONGO_CON is missing from the .env file');
} else {
  mongoose.connect(connectionString)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err.message));
}

// Monitor database connection errors
const db = mongoose.connection;
db.on('error', err => {
  console.error('MongoDB connection error:', err.message);
});

const Park = require('./models/park');


 // Seed the Parks collection with three records
async function recreateDB() {
  // Delete existing parks before adding initial data
  await Park.deleteMany({});

  const parks = [
    {
      park_name: "Yellowstone",
      state: "Wyoming",
      area_acres: 2219791
    },
    {
      park_name: "Yosemite",
      state: "California",
      area_acres: 761748
    },
    {
      park_name: "Grand Canyon",
      state: "Arizona",
      area_acres: 1217262
    }
  ];

  await Park.insertMany(parks);
  console.log("Three parks saved successfully");
}

// Temporary seeding - turn this off after initial setup
let reseed = false;

db.once('open', function() {
  if (reseed) {
    recreateDB().catch(err => console.error(err));
  }
});



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var parksRouter = require('./routes/parks');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/parks', parksRouter);
app.use('/grid', gridRouter);
app.use('/selector', pickRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
