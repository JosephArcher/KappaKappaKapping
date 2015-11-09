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


  render() {
   injectTapEventPlugin();
  this.state = {
  fixedHeader: true,
  fixedFooter: true,
  stripedRows: true,
  showRowHover: true,
  selectable: true,
  multiSelectable: true,
  enableSelectAll: false,
  displaySelectAll: false,
  deselectOnClickaway: false,
  adjustForCheckbox: false,
  displayRowCheckbox: false,
  height: '300px',
};
    return (
      <div>
      <div>
      <h1 className="textCenter"> Transferable Courses </h1>
      </div>
      <div>
        <FilterCourses> </FilterCourses>
      </div>
      <Table striped hover responsive>
        <thead>
          <tr>
            <th> Title </th>
            <th> ID </th>
            <th> Completed ? </th>
          </tr>
        </thead>
        <tbody>
         <tr>
          <CourseListItem courseTitle="Intro to Programming" courseID="420"> </CourseListItem>
         </tr>
         <tr>
          <CourseListItem courseTitle="Intro to Programming" courseID="420"> </CourseListItem>
         </tr>
         <tr>
          <CourseListItem courseTitle="Intro to Programming" courseID="420"> </CourseListItem>
         </tr>
         <tr>
          <CourseListItem courseTitle="Intro to Programming" courseID="420"> </CourseListItem>
         </tr>
         <tr>
          <CourseListItem courseTitle="Intro to Programming" courseID="420"> </CourseListItem>
         </tr>
         <tr>
          <CourseListItem courseTitle="Intro to Programming" courseID="420"> </CourseListItem>
         </tr>
         <tr>
          <CourseListItem courseTitle="Intro to Programming" courseID="420"> </CourseListItem>
         </tr>
         <tr>
          <CourseListItem courseTitle="Intro to Programming" courseID="420"> </CourseListItem>
         </tr>
         <tr>
          <CourseListItem courseTitle="Intro to Programming" courseID="420"> </CourseListItem>
         </tr>
         <tr>
          <CourseListItem courseTitle="Intro to Programming" courseID="420"> </CourseListItem>
         </tr>
        </tbody>
      </Table>
    </div>
   );
  }
}
export default TransferCourseTable; 