
var AppDispatcher = require('../core/dispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionTypes = require('../constants/ActionTypes');
import _ from 'underscore';

var CHANGE_EVENT = 'change';

var _avaliableTransferSchools = {};
var _currentlySelectedTransferSChool;

var _allAvailableCourses = {};

var _allCompletedCourseIds = {};


// Extend ProductStore with EventEmitter to add eventing capabilities
var CourseSelectionPageStore = _.extend({}, EventEmitter.prototype, {

  // Get all of the transfer schoosl based on the currently selected transfer school
  getAllTransferSchools: function() {

  }

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Extend ProductStore with EventEmitter to add eventing capabilities
var ProductStore = _.extend({}, EventEmitter.prototype, {

  // Return Product data
  getProduct: function() {
    return _product;
  },

  // Return selected Product
  getSelected: function(){
    return _selected;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});


// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case ActionTypes.Course_CREATE:
      console.log("AppDispatcher -- COURSE CREATE");
       CourseStore.emitChange();
      
      break;

    case ActionTypes.Course_COMPLETE:
      console.log("AppDispatcher -- COURSE COMPLETE");
      CourseStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = CourseSelectionPageStore;