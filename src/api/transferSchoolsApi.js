/**
 * Created by priscoj on 11/6/15.
 */
import pg from 'pg';
import Router from 'express';

let router = new Router();
let conString = "postgres://priscoj:alpha29avalon@localhost/capping";

// If the route matches /api/getTransferSchools...
router.get('/', function(req, res) {
    // Set up the connection
    pg.connect(conString, function(err, client, done) {
      console.log("Here we are in the vast wasteland that is the pg.connect function.");

      // Define the query
      var query = client.query('SELECT * FROM transfer_schools');

      // This query.on() call will run as many times as rows there are
      query.on('row', function(row, result) {
        console.log("Querying for transfer schools.");
        console.log(row);
        result.addRow(row);
      });
    });
});

export default router;
