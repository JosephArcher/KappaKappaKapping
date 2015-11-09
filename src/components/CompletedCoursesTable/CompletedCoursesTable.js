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
      <h1 className="textCenter">  {tableTitle} </h1>
      </div>
      <Table striped hover responsive>
        <thead>
          <tr>
            <th> Course Title </th>
            <th> Delete </th>
          </tr>
        </thead>
        <tbody>
         <tr>
          <CompletedCourseListItem courseTitle="Intro to Programming"> </CompletedCourseListItem>
         </tr>
        </tbody>
      </Table>
    </div>
   );
  }
}
export default CompletedCoursesTable; 