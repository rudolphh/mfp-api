'use strict';


module.exports = function (app, mfp) {

  app.get('/nutrients', (req, res) => {
    const from = req.query.from || null;
    const to = req.query.to || null;
    if ( from && to ) {
      mfp.fetchDateRange(process.env.MFPUSER, from, to, 'all', (nutrientData) => {
        res.json( nutrientData );
      })
    } else if ( from ) {
      mfp.fetchSingleDate(process.env.MFPUSER, from, 'all', (nutrientData) => {
        res.json({ nutrientData });
      })
    } else res.send('invalid request');
  });
};
