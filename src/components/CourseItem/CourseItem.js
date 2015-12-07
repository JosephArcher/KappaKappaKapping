import React ,{ PropTypes, Component } from 'react';
import styles from './CourseItem.css';
import withStyles from '../../decorators/withStyles';
import {Button} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Label} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
const injectTapEventPlugin = require("react-tap-event-plugin");
import TransferCoursesTable from '../TransferCoursesTable';
import CompletedCoursesTable from '../CompletedCoursesTable';
const PieChart = require("react-chartjs").Pie;

class CourseItem extends Component {

 static propTypes = {
    course: PropTypes.object.isRequired
  };

  render() {

  const course = this.props.course;

  let alex = "";

  if(course.marist_crn == null){
    alex = course.transfer_course_id;
  }
  else{
    alex= course.marist_crn;
  }
	
    return (
    	 <tr>
        <td>{course.course_title}</td>
        <td>{alex}</td>
      </tr>
    );
  }
}
export default  CourseItem;