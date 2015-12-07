import pg from 'pg';
import Router from 'express';
import AdminStore from '../stores/AdminStore';
var bodyParser = require('body-parser');
let router = new Router();
router.use(bodyParser.json());
let conString = "postgres://postgres:ja5125@localhost/postgres";

router.post('/register', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  pg.connect(conString, function(err, client, done) {
    if (err) {
      done();
      return res.status(500).json({ success: false, data: err});
    }

    client.query('INSERT INTO people(user_id, password, is_admin, last_sign_in) ' +
                 'values($1, $2, $3, $4)',
                 [username, password, true, '2011-11-11']);
  });
});

router.get('/getStudents', function(req, res) {
  var results = [];

  pg.connect(conString, function(err, client, done) {
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    var query = client.query('SELECT * FROM students');

    query.on('row', function(row) {
      console.log("Querying for students.");
      results.push(row);
    });

    query.on('end', function() {
      done();
      return res.json(results);
    });
  });
});

router.post('/addCourseToProgram', function(req, res) {
  var course = req.body.course;
  pg.connect(conString, function(err, client, done) {
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    console.log("Connected and trying to add course: " + course);

    client.query('INSERT INTO program_requirements(program_id, marist_crn) ' +
                 'VALUES($1, $2)',
                  ['99999', course]);

  });
});

router.post('/removeCourseFromProgram', function(req, res) {
  var data = { program: req.body.program, course: req.body.course };

  pg.connect(conString, function(err, client, done) {
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    client.query('DELETE FROM program_requirements WHERE program_id = $1 AND marist_crn = $2',
                 [data.program, data.course]);
  });
});

router.post('/addCourseEquivalency', function(req, res) {
  var data = { program: req.body.marist_crn, transfer: req.body.transfer, credits: req.body.credits };

  pg.connect(conString, function(err, client, done) {
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    client.query('INSERT INTO course_equivalents(marist_crn, transfer_course_id, number_of_credts) ' +
                 'VALUES($1, $2, $3)', [data.program, data.transfer, data.credits]);
  });
});

router.post('/removeCourseEquivalency', function(req, res) {
  var data = req.body.course;

  pg.connect(conString, function(err, client, done) {
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    client.query('DELETE FROM course_equivalents WHERE marist_crn = $1', data);
  });
});

export default router;
