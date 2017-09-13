'use strict';

const mfpRoutes = require('./mfp_routes');

module.exports = function (app, mfp) {
  mfpRoutes(app, mfp);
  // other route groups can go here in the future
}
