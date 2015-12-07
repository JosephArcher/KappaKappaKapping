import React, { Component, PropTypes } from 'react';
import CourseSelectionPageActions from '../../actions/CourseSelectionPageActions';


export default class CourseListItem extends Component {

  static propTypes = {
    course: PropTypes.object.isRequired
  };

  render() {
    const course = this.props.course;
    console.log("broke");
    console.log(course);
   function _markCompleted(){ 
      CourseSelectionPageActions.create(course);
  }

    return (
       <tr>
        <td className="first">{course.title}</td>
        <td className="second">{course.ID}</td>
        <td className="third">       
            <button
              type="button"
              className="btn btn-primary"
              onClick={_markCompleted}>
              Select
            </button>         
        </td>
      </tr>
    );
  }
}

export default CourseListItem;