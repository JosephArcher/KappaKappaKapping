/**
 */
import pg from 'pg';
import Router from 'express';
let _transfer_school_name = "DCC";

let _transfer_school_id = "";



let router = new Router();
let conString = "postgres://postgres:wumbo100@localhost/kap";

// If the route matches /api/getTransferSchools...
router.get('/', function(req, res) {
  // Set up the connection
  var results = [];
  pg.connect(conString, function(err, client, done) {

    //if error
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    // Get all from tranfer schools
    var query = client.query('SELECT * FROM transfer_schools');

    // This query.on() call will run as many times as rows there are
    query.on('row', function(row) {
      //if given name is the same as transfer school name
      if( _transfer_school_name == row.school_name){
        //change transfer school id constant to given's
        _transfer_school_id = row.school_id;

      };

    });


    //Selects all from transfer courses with the given ID
    var query = client.query('SELECT * FROM transfer_courses');

    // This query.on() call will run as many times as rows there are
    query.on('row', function(row) {
      if( _transfer_school_id == row.school_id){
        results.push(row);

      };

    });


    query.on('end', function() {
      done();
      return res.json(results);
    });

  });
});



export default router;
