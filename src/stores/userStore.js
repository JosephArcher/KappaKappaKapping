var AppDispatcher = require('../core/Dispatcher');
var EventEmitter = require('events').EventEmitter;
import ActionTypes from '../constants/ActionTypes';
import _ from 'underscore';
var request = require('superagent');
var prefix = require('superagent-prefix')('/static');

var _students = {};
//var percentComplete = 0;

function registerUser(us, fn, ln, pw, em, pn, bd, ma, sd, cs) {
  // This is where we use the superagent stuff.
  console.log("Logging First name from user store: " + fn);
  console.log("Logging Last Name from user store: " + ln);

  request
    //.post('/api/postCR')
   .post('/auth/signup')
    .send({ us : us, fn : fn, ln : ln, pw : pw, em : em, pn : pn, bd : bd, ma : ma, sd : sd , cs : cs })
    .end(function(err, res){
      if (err) {
        console.log("There's been an error.");
        console.log(err);
      } else {
        console.log("No error.");
        console.log(res);
        if (res.statusCode === 200) {
          window.location.href = '/login';
        }
      }
    });
}


function logUser(un, up) {
  // This is where we use the superagent stuff.
  console.log("Logging username from user store: " + un);
  console.log("Logging password from user store: " + up);

  request
    .post('/auth/login')
    .send({user: un, password: up})
    .end(function (err, res) {
      if (err) {
        console.log("There's been an error.");
        console.log(err);
      } else {
        console.log("No error.");
        console.log(res);
        document.cookie = "user";
        if (res.body.admin) {
          //req.session.admin = true
          sessionStorage.setItem('admin', true);
          window.location.href = '/admin';
          //console.log("Admin bool: " + sessionStorage.getItem('admin'));
        } else {
          //req.session.admin = false;
          sessionStorage.setItem('admin', false);
          sessionStorage.setItem('user', res.body.user);
          window.location.href = '/welcome';
          //console.log("Admin bool: " + sessionStorage.getItem('admin'));
        }
      }
    });
}

  //     UserActions.updateProfile(firstName, lastName, email, phone, major, startDate);

  function updateProfile(user, firstName, lastName, email, phone, major, startDate) {
    console.log('before superagent');
    request
      .post('/auth/update')
      .send({ user: user, firstName: firstName, lastName: lastName, email: email, phone: phone, major: major, startDate: startDate })
      .end(function(err, res) {
      if (err) {
        console.log("there's been an error");
        console.log(err);
      } else {
        console.log("no error");
        console.log(res);
      }
    });
  }



var userStore = _.extend({}, EventEmitter.prototype, {

  //let testFuck = "hey man";

  emitChange: function() {
    this.emit('change');
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {

    case ActionTypes.REGISTER_USER:
      registerUser(action.us, action.fn, action.ln, action.pw, action.em, action.pn, action.bd, action.ma, action.sd, action.cs);
      break;

    case ActionTypes.LOG_USER:
      logUser(action.un, action.up);
      break;

    case ActionTypes.UPDATE_PROFILE:
      updateProfile(action.user, action.firstName, action.lastName, action.email, action.phone, action.major, action.startDate);
      break;

    default:
      break;
  }
});

export default userStore;
