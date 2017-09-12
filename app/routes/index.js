'use strict';

const mfpRoutes = require('./mfp_routes');

module.exports = function (app, db) {
  mfpRoutes(app, db);
  // other route groups can go here in the future
}
