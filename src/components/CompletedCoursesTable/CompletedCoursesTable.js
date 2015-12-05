import React, { PropTypes, Component } from 'react';
import styles from './CompletedCoursesTable.css';
import withStyles from '../../decorators/withStyles';
import {Table} from 'react-bootstrap';
const injectTapEventPlugin = require("react-tap-event-plugin");
import {Label} from 'react-bootstrap';
import CompletedCourseListItem from '../CompletedCourseListItem';
import FilterCourses from '../FilterCourses';

@withStyles(styles)
class CompletedCoursesTable extends Component {

  static propTypes = {
     CompletedCourses: PropTypes.array.isRequired
  };

  update(){
    
  }
 
  render() {

    const CompletedCourses = this.props.CompletedCourses;
    const tableHeading = "Completed Courses";
    const title = "Title";
    const id = "ID";
    const completed = "Completed ?";

       console.log("sup holmes");
    console.log(CompletedCourses);

    const FilterCoursesSection = (
      <FilterCourses> </FilterCourses>
    );

    return (
      <div>
      <div>
      <h1 className="textCenter"> Completed Courses </h1>
      </div>
      <Table striped hover responsive>
        <thead>
          <tr>
            <th> Course Title </th>
            <th> Delete </th>
          </tr>
        </thead>
        <tbody>
        {
        this.props.CompletedCourses.map(function(courseObject) {
          return <CompletedCourseListItem  course={courseObject} ></CompletedCourseListItem>
        })
       }
        </tbody>
      </Table>
    </div>
   );
  }
}

export default CompletedCoursesTable; 
