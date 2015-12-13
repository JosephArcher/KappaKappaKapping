import pg from 'pg';

var LocalStrategy   = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');
let conString = "postgres://postgres:ja5125@localhost/postgres";

//temporary data store
var users = {};
module.exports = function(passport){

    // Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
        console.log('serializing user:',user.username);
        return done(null, user.username);
    });

    passport.deserializeUser(function(username, done) {
        // return the user object back
        return done(null, users[username]);

    });

    passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },

        function(req, username, password, done) { 
            // check if user exists
            var results = [];

            pg.connect(conString, function(err, client, done {
                if (err) {
                    done();
                    console.log(err);
                    return res.status(500).json({success: false, data: err});
                }

                var query = client.query('SELECT * FROM people WHERE username = $1');

                query.on('row', function(row) {
                  results.push(row);
                });



            }))
            // check if password is correct for that user
            // check if the user is an admin and redirect appropriately
            // res.redirect?


            // Successfully signed in
            console.log("User singed in");
            return done(null, users[username]);
        }
    ));

    passport.use('signup', new LocalStrategy({
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {
            var _first_name = req.body.fn;
            var _last_name = req.body.ln;
            var _userId = req.body.un;
            var _password = req.body.pw;
            var _phone_number = req.body.pn;
            //fix db constraints
            var _birthday = req.body.bd;
            //var _birthday = req.body.bd;
            var _email = req.body.em;
            var _school_id = req.body.cs;
            var _intended_start_date = req.body.sd;
            var _intended_major = req.body.ma;

            // look at db to see if user exists (get request)
            // if user exists, done
            // if user doesn't exit, add user to database (post request)
            // redirect to login page after


            // check if the user already exists
            pg.connect(conString, function(err, client, done {
                if (err) {
                    done();
                    console.log(err);
                    return res.status(500).json({success: false, data: err});
                }

                var query = client.query('SELECT * FROM people WHERE user_id = $1',
                                         [_userId]);

                query.on('row', function(row) {
                  results.push(row);
                });

                if (results.length > 0) {
                    return done('user_id already exists', false);
                }

                client.query('INSERT INTO people (user_id, password, is_admin) values ($1, $2, $3)', [username, createHash(_password), false]);

                client.query("INSERT INTO students(user_id, school_id, first_name, last_name, email,  phone_number, birthday, intended_major, intended_start_date)"
                             + "VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)", [_userId, _school_id, _first_name, _last_name, _email,  _phone_number, _birthday, _intended_major, _intended_start_date]);

            }));

            return done(null);
        })
    );

    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    };
    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };

};