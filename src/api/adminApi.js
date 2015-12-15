import pg from 'pg';
import Router from 'express';
import AdminStore from '../stores/adminStore';
var bCrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
let router = new Router();
router.use(bodyParser.json());
//let conString = "postgres://priscoj:alpha29@localhost/capping";
let conString = 'postgres://justin:swag@10.10.7.182/transfer';
//
router.post('/register', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  pg.connect(conString, function(err, client, done) {
    var handleError = function(err) {
      // no error occurred, continue with the request
      if(!err) return false;

      if(client){
        done(client);
      }
      res.end('An error occurred');
      return true;
    };

    if (err) {
      done();
      return res.status(500).json({ success: false, data: err});
    }

    client.query('INSERT INTO people(user_id, password, is_admin) ' +
                 'values($1, $2, $3)',
                 [username, createHash(password), true], function(err, result) {
        if (handleError(err)) {
          return;
        }
      });
    done();
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

    var query = client.query('SELECT first_name, last_name, email FROM students');

    query.on('row', function(row) {
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
    var handleError = function(err) {
      // no error occurred, continue with the request
      if(!err) return false;

      if(client){
        done(client);
      }
      res.end('An error occurred');
      return true;
    };


    if (err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    client.query('INSERT INTO program_requirements(program_id, marist_crn) ' +
                 'VALUES($1, $2)',
                  ['99999', course], function(err, result) {
        if (handleError(err)) {
          return;
        }
      });
      done();
  });
});

router.post('/removeCourseFromProgram', function(req, res) {
  var course = req.body.course;
  pg.connect(conString, function(err, client, done) {
    var handleError = function(err) {
      // no error occurred, continue with the request
      if(!err) return false;

      if(client){
        done(client);
      }
      res.end('An error occurred');
      return true;
    };

    if (err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    client.query('DELETE FROM program_requirements WHERE program_id = $1 AND marist_crn = $2',
                 ['99999', course], function(err, result) {
        if (handleError(err)) {
          return;
        }
      });
    done();
  });
});

router.post('/addCourseEquivalency', function(req, res) {
  var program = req.body.maristCourse;
  var transfer = req.body.transferCourse;
  var credits = req.body.credits;

  pg.connect(conString, function(err, client, done) {
    var handleError = function(err) {
      // no error occurred, continue with the request
      if(!err) return false;

      if(client){
        done(client);
      }
      res.end('An error occurred');
      return true;
    };

    if (err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    client.query('INSERT INTO course_equivalents(marist_crn, transfer_course_id, number_of_credits) ' +
                 'VALUES($1, $2, $3)', [program.toString(), transfer.toString(), credits.toString()], function(err, result) {
      if (handleError(err)) {
        return;
      }
    });
    done();
  });
});

router.post('/removeCourseEquivalency', function(req, res) {
  var marist = req.body.maristCourse;
  var transfer = req.body.transferCourse;

  pg.connect(conString, function(err, client, done) {
    var handleError = function(err) {
      // no error occurred, continue with the request
      if(!err) return false;

      if(client){
        done(client);
      }
      res.end('An error occurred');
      return true;
    };

    if (err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    client.query('DELETE FROM course_equivalents WHERE marist_crn = $1 and transfer_course_id = $2', [marist, transfer], function(err, result) {
      if (handleError(err)) {
        return;
      }
    });
    done();
  });
});

router.get('/getProgramRequirements', function(req, res) {
  var results = [];

  pg.connect(conString, function(err, client, done) {
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    var query = client.query('select program_requirements.marist_crn, ' +
                             'marist_courses.course_title, ' +
                             'marist_courses.number_of_credits ' +
                             'from marist_courses ' +
                             'inner join program_requirements on marist_courses.marist_crn = program_requirements.marist_crn ' +
                             'and program_requirements.program_id = \'99999\'');

    query.on('row', function(row) {
      results.push(row);
    });

    query.on('end', function() {
      done();
      return res.json(results);
    });
  });
});

router.get('/getCourseEquivalents', function(req, res) {
  var results = [];

  pg.connect(conString, function(err, client, done) {
    if (err) {
      console.log("error in pgconnect");
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    var query = client.query('select marist_courses.course_title as marist_course, ' +
                             'transfer_courses.course_title as transfer_course, ' +
                             'marist_courses.marist_crn as marist_crn, ' +
                             'transfer_courses.transfer_course_id as transfer_id ' +
                             'from marist_courses ' +
                             'inner join course_equivalents ' +
                             'on course_equivalents.marist_crn = marist_courses.marist_crn ' +
                             'inner join transfer_courses ' +
                             'on transfer_courses.transfer_course_id = course_equivalents.transfer_course_id;');

    query.on('row', function(row) {
      results.push(row);
    });

    query.on('end', function() {
      done();
      return res.json(results);
    });
  });
});

router.get('/getSubmittedCourses', function(req, res) {
  var results = [];

  pg.connect(conString, function(err, client, done) {
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    var query = client.query('select name, course_description, number_of_credits ' +
                             'from student_submitted_courses;');

    query.on('row', function(row) {
      results.push(row);
    });

    query.on('end', function() {
      done();
      return res.json(results);
    });
  })
});

var createHash = function(password){
  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

export default router;
