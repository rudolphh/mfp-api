'use strict';

const dotenv         = require('dotenv').load();
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const mfp            = require('mfp');

const app            = express();

const port = process.env.PORT || 8000;


mfp.apiStatusCheck(function(errors) {
  if (errors.length !== 0) {
    errors.forEach(function(error){
      console.log(error);
    });
  } else {
    console.log("There aren't any errors!");
    mfp.diaryStatusCheck(process.env.MFPUSER, function(status) {
      console.log('diaryStatusCheck: ' + status);// public, private, or 'invalid user'
    });
  }
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
