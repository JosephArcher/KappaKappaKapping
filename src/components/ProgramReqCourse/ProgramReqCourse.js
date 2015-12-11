import React, { Component, PropTypes } from 'react';
import AdminActions from '../../actions/adminActions';

class ProgramReqCourse extends Component {
  static propTypes = {
    course: PropTypes.object.isRequired
  };

  render() {

    const course = this.props.course;
    function _removeProgramRequirement() {
        AdminActions.removeCourseFromProgram();
    }

    return (
      <tr>
        <td>{course.marist_crn}</td>
        <td>{course.course_title}</td>
        <td>{course.number_of_credits}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={_removeProgramRequirement}>
            Remove
          </button>
        </td>
      </tr>
    );
  }
}
export default ProgramReqCourse;
