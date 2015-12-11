var AppDispatcher = require('../core/dispatcher');
var EventEmitter = require('events').EventEmitter;
import ActionTypes from '../constants/ActionTypes';
import _ from 'underscore';
var request = require('superagent');
var prefix = require('superagent-prefix')('/static');

let students = [];


function registerAdmin(user, pw) {
  // This is where we use the superagent stuff.
  console.log("Logging username from admin store: " + username);
  console.log("Logging password from admin store: " + password);

  request
    .post('/api/adminApi/register')
    .send({ username: user, password: pw })
    .end(function(err, res){
      if (err) {
        console.log("There's been an error registering an admin.");
        console.log(err);
      } else {
        console.log("Registering admin");
        console.log(res);
      }
    });
}

function addCourseToProgram(program, course) {
  request
    .post('/api/adminApi/addCourseToProgram')
    .send({ program: program, course: course })
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

function getProgramRequirements() {
  request
    .get('/api/adminApi/getProgramRequirements')
    .end(function(err, res) {
      if (err) {
        console.log("There's been an error: geting program reqs.");
        console.log(err);
      } else {
        return res;
      }
    });
}

function removeCourseFromProgram(course, program) {

}

 function getStudents() {
   request
     .get('http://localhost:3000/api/adminApi/getStudents')
     .set('Accept', 'application/json')
     .end(function(err, res) {
       if (err) {
         console.log("There's been an error: getting students. ");
         console.log(err);
       } else {
         console.log("In upper function");
         return res;
       }
     });
 }

var AdminStore = _.extend({}, EventEmitter.prototype, {

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
  },

  getAdminState: function() {
    //this.getStudents();

    return {
      students: this.getStudents()
      //programReqCourses: this.getProgramRequirements()

    }
  },

  getProgramRequirements: function() {
    request
      .get('/api/adminApi/getProgramRequirements')
      .end(function(err, res) {
        if (err) {
          console.log("There's been an error: getting Program Requirements.");
          console.log(err);
        } else {
          return res;
        }
      });
  },

  getStudents: function() {
    request
      .get('http://localhost:3000/api/adminApi/getStudents')
      .end(function(err, res) {
        if (err) {
          console.log("There's been an error: getting students. 2");
          console.log(err);
        } else {
          //console.log("In AdminStore function.");
          console.log(res.body);
          return res.body;
        }
      });
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {

    case ActionTypes.REGISTER_ADMIN:
      console.log("ActionTypes.REGISTER_ADMIN");
      registerAdmin(action.username, action.password);
      break;

    case ActionTypes.ADD_COURSE_TO_PROGRAM:
      addCourseToProgram(action.program, action.course);
      break;

    case ActionTypes.REMOVE_COURSE_FROM_PROGRAM:
      removeCourseFromProgram(action.course, action.program);
      break;

    case ActionTypes.GET_STUDENTS:
          getStudents();
          break;

    default:
          break;
  }
});

export default AdminStore;
