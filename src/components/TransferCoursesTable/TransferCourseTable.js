import React, { PropTypes, Component } from 'react';
import styles from './TransferCourseTable.css';
import withStyles from '../../decorators/withStyles';
import {Table} from 'react-bootstrap';
const injectTapEventPlugin = require("react-tap-event-plugin");
import {Label} from 'react-bootstrap';
import CourseListItem from '../CourseListItem';
import FilterCourses from '../FilterCourses';

@withStyles(styles)
class TransferCourseTable extends Component {

  static propTypes = {
     availableTransferCourses: PropTypes.array.isRequired
  };
 
  render() {
    const availableTransferCourses = this.props.availableTransferCourses;
    const tableHeading = "Transferable Courses";
    const title = "Title";
    const id = "ID";
    const completed = "Completed ?";

    const FilterCoursesSection = (
      <FilterCourses> </FilterCourses>
    );

    return (
      <div>
      <div>
      <h1 className="textCenter">{tableHeading}</h1>
      </div>
      <div>
        {FilterCoursesSection}
      </div>
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>{title}</th>
            <th>{id}</th>
            <th>{completed}</th>
          </tr>
        </thead>
        <tbody>
        {
        this.props.availableTransferCourses.map(function(courseObject) {
          return <CourseListItem  course={courseObject} ></CourseListItem>
        })
       }
        </tbody>
      </Table>
    </div>
   );
  }
}

export default TransferCourseTable; 
