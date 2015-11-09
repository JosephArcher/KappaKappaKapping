import React, { Component, PropTypes } from 'react';

export default class CompletedCourseListItem extends Component {
  static propTypes = {
    courseTitle: PropTypes.string.isRequired,
  };

  render() {
    const {courseTitle, courseID} = this.props;

    return (
      <tr>
        <td>Class Title</td>
        <td>       
            <button
              type="button"
              className="btn btn-danger">
              Delete
            </button>         
        </td>
      </tr>
    );
  }
}