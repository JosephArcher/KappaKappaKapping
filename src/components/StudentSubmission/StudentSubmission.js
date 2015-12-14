import React, { Component, PropTypes } from 'react';


class StudentSubmission extends Component {
  static propTypes = {
    submission: PropTypes.object.isRequired
  };
  render() {

    const submission = this.props.submission;
    return (
      <tr>
        <td>{submission.name}</td>
        <td>{submission.course_description}</td>
        <td>{submission.number_of_credits}</td>
        <td>Dutchess County Community College</td>
      </tr>
    );
  }
}
export default StudentSubmission;
