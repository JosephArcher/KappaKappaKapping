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
    courseTitle: PropTypes.string.isRequired,
    courseID: PropTypes.string.isRequired,

  };
  render() {

    const {courseTitle, courseID} = this.props;
	
    return (
    	 <tr>
        <td>{courseTitle}</td>
        <td>{courseID}</td>
      </tr>
    );
  }
}
export default  CourseItem;