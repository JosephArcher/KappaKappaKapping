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
   _onChange () {
    console.log("A CHANGE HAS OCCURED");
      this.setState(CourseSelectionStore.getCourseSelectionState());
  } 
  render() {
    const availableTransferCourses = this.props.availableTransferCourses;
    const tableHeading = "Transferable Courses";
    const title = "Title";
    const id = "ID";
    const select = "Select";

    const FilterCoursesSection = (
      <FilterCourses> </FilterCourses>
    );

    return (
      <div styles="">
      <div>
        {FilterCoursesSection}
      </div>
      <div className="completedTable">
      <Table striped hover responsive>
        <thead>
          <tr>
            <th className="first">{title}</th>
            <th className="second">{id}</th>
            <th className="third">{select}</th>
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
    </div>
   );
  
  }
}

export default TransferCourseTable; 
