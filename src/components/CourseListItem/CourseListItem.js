import React, { Component, PropTypes } from 'react';
import actionCourse from '../../actions/actionCourse';
import CourseStore from '../../Stores/CourseStore';


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

    function markCompleted() {

      console.log('Button Was clicked');
       actionCourse.complete({course});
    };

    return (
       <tr>
        <td></td>
        <td></td>
        <td>       
            <button
              type="button"
              className="btn btn-primary"
              onClick={markCompleted}>
              Completed
            </button>         
        </td>
      </tr>
    );
  }

}

export default CourseListItem;