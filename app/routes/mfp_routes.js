'use strict';


module.exports = function (app, db) {

  app.get('/nutrients', (req, res) => {
    const from = req.query.from || null;
    const to = req.query.to || null;
    ( from && to ) ? res.json({ from, to }) : ( from ) ? res.json({ from }) : res.send('invalid request');
  });
};
