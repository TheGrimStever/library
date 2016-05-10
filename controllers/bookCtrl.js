var config = require('../config.js');
var pgp = require('pg-promise')(/*options*/);
// var cn = pgp(config.dbConnect);
var cn = config.dbConnect;
var db = pgp(cn);

module.exports = {

  Create: function (req, res, next) {

    db.none("insert into books(isbn, title, subtitle, author, page_count," +
    "book_read) values("+req.params.isbn+", 'Goofy', 'A Movie', 'Disney', 10, true)")
    .then(function () {
      console.log('true');
      res.status(200);
    })
    .catch(function (error) {
      console.log('false');
      res.status(500).json(error);
    });
  }


  //Read:

  //Update:

  //Delete:


}
