/**
 * Created by priscoj on 11/6/15.
 */
import pg from 'pg';
import Router from 'express';

let router = new Router();
let conString = "postgres://postgres:ja5125@localhost/postgres";

// If the route matches /api/getTransferSchools...
router.get('/', function(req, res) {
    // Set up the connection
    var results = [];
    pg.connect(conString, function(err, client, done) {

      if (err) {
        done();
        console.log(err);
        return res.status(500).json({ success: false, data: err});
      }

      console.log("Here we are in the vast wasteland that is the pg.connect function.");

      // Define the query
      var query = client.query('SELECT * FROM transfer_schools');

      // This query.on() call will run as many times as rows there are
      query.on('row', function(row) {
        console.log("Querying for transfer schools.");
        //console.log(row);
        results.push(row);
      });

      query.on('end', function() {
        done();
        return res.json(results);
      });
    });
});

export default router;
