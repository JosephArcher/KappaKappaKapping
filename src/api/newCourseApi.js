/**
 * Created by ahoch 11/8/15
 */
import pg from 'pg';
import Router from 'express';
var bodyParser = require('body-parser');
let router = new Router();
router.use(bodyParser.json());

let conString = 'postgres://justin:swag@10.10.7.182/transfer';
console.log("joe");


// If the route matches /api/getTransferSchools...
router.post('', function(req, res) {
  console.log(req.body);


   var username = "student";
   var _name = req.body.name;
   var _id = req.body.id;
   var _credits = req.body.credits;
   var _descrip = req.body.descrip;

  // Set up the connection
  var results = [];

 // console.log(res);

  pg.connect(conString, function(err, client, done) {
console.log("joe");
    if (err) {
      done();
    //  console.log(err);
      return res.status(500).json({ success: false, data: err});
    }
    //query

    var query = client.query("INSERT INTO student_submitted_courses (user_id, name, course_description, course_id, number_of_credits) VALUES ($1, $2, $3, $4, $5)", [username, _name, _id, _credits, _descrip]);

    // This query.on() call will run as many times as rows there are
    query.on('row', function(row, result) {
      results.push(row);
      console.log(row);
    });


    query.on('end', function() {
      done();

      return res.json(results);
    });


  });
});

export default router;
