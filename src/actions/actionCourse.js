var AppDispatcher = require('../core/dispatcher');
var ActionTypes = require('../constants/ActionTypes');


var actionCourse = {

  /**
   * @param  {string} text
   */
  create: function() {
    AppDispatcher.dispatch({
      actionType: ActionTypes.Course_CREATE
    });
  },

  complete: function() {
  	
  	AppDispatcher.dispatch({
  		actionType: ActionTypes.Course_COMPLETE
  	});
  }

};

module.exports = actionCourse;
