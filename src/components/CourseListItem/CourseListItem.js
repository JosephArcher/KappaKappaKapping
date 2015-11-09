import React, { Component, PropTypes } from 'react';
import CourseSelectionPageActions from '../../actions/CourseSelectionPageActions';


class CourseListItem extends Component {

  static propTypes = { 
    course: PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // ...
  }

  componentWillUnmount() {
    // ...
  }

  shouldComponentUpdate() {
    // ...
  }


  render() {

    const course = this.props.course;

   function markCompleted(course){ 
      CourseSelectionPageActions.create(course);
  }

    return (
       <tr>
        <td>{course.title}</td>
        <td>{course.id}</td>
        <td>       
            <button
              type="button"
              className="btn btn-primary"
              onClick={e => markCompleted(this.props.course)}>
              Completed
            </button>         
        </td>
      </tr>
    );
  }

}

export default CourseListItem;