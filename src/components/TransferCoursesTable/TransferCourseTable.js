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
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };


  render() {

   injectTapEventPlugin();

   const {courses, actions} = this.props;

   const Pokemon = [
     { name : "Bulbasaur", type : "grass", stage : 0, caught : 0, species : "Seed Pokemon"}
    ];

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
         <CourseListItem course={Pokemon} > </CourseListItem>
        </tbody>
      </Table>
    </div>
   );
  }
}
export default TransferCourseTable; 