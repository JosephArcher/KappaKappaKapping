var AppDispatcher = require('../core/dispatcher');
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
   .post('/api/signup')
    .send({ us : us, fn : fn, ln : ln, pw : pw, em : em, pn : pn, bd : bd, ma : ma, sd : sd , cs : cs })
    .end(function(err, res){
      if (err) {
        console.log("There's been an error.");
        console.log(err);
      } else {
        console.log("No error.");
        console.log(res);
      } 
    });
}


function logUser(un, up) {
  // This is where we use the superagent stuff.
  console.log("Logging username from user store: " + un);
  console.log("Logging password from user store: " + up);

  // request
  //   //.post('/api/postCR')
  //  .post('/api/postRegisterStudent')
  //   .send({ us : us, fn : fn, ln : ln, pw : pw, em : em, pn : pn, bd : bd, ma : ma, sd : sd , cs : cs })
  //   .end(function(err, res){
  //     if (err) {
  //       console.log("There's been an error.");
  //       console.log(err);
  //     } else {
  //       console.log("No error.");
  //       console.log(res);
  //     } 
  //   });
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

    default:
          break;
  }
});
    
export default userStore;