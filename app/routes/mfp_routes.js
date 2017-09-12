'use strict';


module.exports = function (app, db) {

  app.get('/nutrients', (req, res) => {
    const from = req.query.from || null;
    const to = req.query.to || null;

    if( !from && !to ) { res.send('invalid data') }
    else if ( !to ) { res.json({ from }); }
    else { res.json({ from, to }); }
  });
};
