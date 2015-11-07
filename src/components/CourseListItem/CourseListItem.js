import React, { Component, PropTypes } from 'react';

export default class CourseListItem extends Component {
  static propTypes = {
    courseTitle: PropTypes.string.isRequired,
    courseID: PropTypes.string.isRequired
  };

  render() {
    const {courseTitle, courseID} = this.props;

    return (
      <tr>
        <td>{courseTitle}</td>
        <td>{courseID}</td>
        <td>       
            <button
              type="button"
              className="btn btn-primary">
              Completed
            </button>         
        </td>
      </tr>
    );
  }
}