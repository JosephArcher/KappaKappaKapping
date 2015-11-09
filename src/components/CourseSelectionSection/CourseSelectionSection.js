import React, { PropTypes, Component } from 'react';
import styles from './CourseSelectionSection.css';
import withStyles from '../../decorators/withStyles';
import {Table} from 'react-bootstrap';
const injectTapEventPlugin = require("react-tap-event-plugin");
import {Label} from 'react-bootstrap';

// Components
import TransferCoursesTable from "../TransferCoursesTable";
import CompletedCoursesTable from "../CompletedCoursesTable";
import CourseListItem from '../CourseListItem';
import FilterCourses from '../FilterCourses';

// Actions
import CourseSelectionActions from "../../actions/CourseSelectionActions";

@withStyles(styles)
class CourseSelectionSection extends Component {

  // Mark a course as completed
   markAsCompleted() {
      CourseSelectionActions.addCompletedCourse();
  }



    var course = {
      title: this.props.
    }
  propTypes: {
      currentlySelectedTransferSchool: ReactProptypes.object.isRequired,
      allAvailableCourses:             ReactProptypes.array.isRequired
  }

  // Mark a class as completed and add it to the completed table
  markAsCompleted(event) {

    var course = {
      title: this.props.
    }
  }

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
export default CourseSelectionSection; 