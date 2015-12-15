var AppDispatcher = require('../core/Dispatcher');
import ActionTypes from '../constants/ActionTypes';
var UserActions = {

  // This is called by the submit button on the register page,
  // and is given the field values as parameters.
  registerUser: function(us, fn, ln, pw, em, pn, ma, sd, cs) {
    console.log("In register user in actions.");
    console.log("Actions: fn: " + fn);
    console.log("Actions: fn: " + ln);
    console.log("Actions: us: " + us);

    AppDispatcher.dispatch({
      actionType: ActionTypes.REGISTER_USER,
      us: us,
      fn: fn,
      ln: ln,
      pw: pw,
      em: em,
      pn: pn,
      ma: ma,
      sd: sd,
      cs: cs
    });
  },

  logUser: function(un, up) {
    console.log("In log user in actions.");
    console.log("Actions: un: " + un);

    AppDispatcher.dispatch({
      actionType: ActionTypes.LOG_USER,
      un: un,
      up: up
    });
  },

  updateProfile: function(user, firstName, lastName, email, phone, major, startDate) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.UPDATE_PROFILE,
      user: user,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      major: major,
      startDate: startDate
    });
  }


};

export default UserActions;
