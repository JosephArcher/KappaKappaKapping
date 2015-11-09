var AppDispatcher = require('../core/dispatcher');
import ActionTypes from '../constants/ActionTypes';
var AdminActions = {

  // This is called by the submit button on the register page,
  // and is given the field values as parameters.
  registerAdmin: function(username, password) {
    console.log("In register admin in actions.");
    console.log("Actions: username: " + username);
    console.log("Actions: password: " + password);

    AppDispatcher.dispatch({
      actionType: ActionTypes.REGISTER_ADMIN,
      username: username,
      password: password
    });
  },

  getStudents: function() {

  },

  addCourseToProgram: function(program, course) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ADD_COURSE_TO_PROGRAM,
      program: program,
      course: course
    });
  },

  removeCourseFromProgram: function() {

  },

  addCourseEquivalency: function() {

  },

  removeCourseEquivalency: function() {

  }

};

export default AdminActions;
