'use strict';

const dotenv         = require('dotenv').load();
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const mfp            = require('mfp');

const app            = express();

const port = process.env.PORT || 8000;


mfp.diaryStatusCheck(process.env.USERNAME, function(status) {
  console.log(status);// public, private, or 'invalid user'
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
