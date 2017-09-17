'use strict';

const dotenv         = require('dotenv').load();
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const mfp            = require('mfp');
const reload = require('reload');

// var MFPDatabase = require('mfpdb');
// var mfpDB = new MFPDatabase(process.env.MFPUSER, process.env.MFPPASS);

const app            = express();
const port = process.env.PORT || 8000;

app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/app/views/index.html');
  });

reload(app);


mfp.apiStatusCheck(function(errors) {
  if (errors.length !== 0) {
    errors.forEach(function(error){
      console.log(error);
    });
  } else {
    console.log("There aren't any errors!");
    mfp.diaryStatusCheck(process.env.MFPUSER, function(status) {
      console.log('diaryStatusCheck: ' + status);// public, private, or 'invalid user'
      require('./app/routes/index')(app, mfp);// no db yet so passing empty object
      // mfpDB.makePublic(results => { console.log(results) });
    });
  }
});


//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

//Start our server and tests!
app.listen(port, function () {
  console.log("Listening on port " + port);
  if(process.env.NODE_ENV==='test') {
    console.log('Running Tests...');
    setTimeout(function () {
      try {
        runner.run();
      } catch(e) {
        var error = e;
          console.log('Tests are not valid:');
          console.log(error);
      }
    }, 1500);
  }
});

module.exports = app; //for testing
