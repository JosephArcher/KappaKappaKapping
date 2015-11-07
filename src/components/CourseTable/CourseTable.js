import React, { PropTypes, Component } from 'react';
import styles from './CourseTable.css';
import withStyles from '../../decorators/withStyles';
import {Table} from 'react-bootstrap';
const injectTapEventPlugin = require("react-tap-event-plugin");
import {Label} from 'react-bootstrap';
import CourseItem from '../CourseItem';
import FilterCourses from '../FilterCourses';

@withStyles(styles)
class CourseTable extends Component {

static propTypes = {
    tableTitle: PropTypes.string.isRequired,
  };

  render() {
    const {tableTitle} = this.props;

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
      <p className="heading"> {tableTitle} </p>
      </div>
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
         <tr>
          <CourseItem courseTitle="Intro to Programming" courseID= "#12312" > </CourseItem>
         </tr>
        </tbody>
      </Table>
    </div>
   );
  }
}
export default CourseTable; 