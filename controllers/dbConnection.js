module.exports = {
  var pgp = require('pg-promise')(/*options*/);
  var cn = pgp(config.dbConnect);
  var db = pgp(cn);
}
