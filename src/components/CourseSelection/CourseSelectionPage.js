import React ,{ PropTypes, Component } from 'react';
import styles from './CourseSelectionPage.css';
import withStyles from '../../decorators/withStyles';
const DropDownMenu  = require('material-ui/lib/drop-down-menu');
const FloatingActionButton = require('material-ui/lib/floating-action-button');
const RaisedButton = require('material-ui/lib/raised-button');
const injectTapEventPlugin = require("react-tap-event-plugin");
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Label} from 'react-bootstrap';
import TransferCourseTable from '../TransferCoursesTable';

@withStyles(styles)
class CourseSelectionPage extends React.Component{

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired, 
  };
 render() {
        const title = 'Course Selection Page';
        injectTapEventPlugin();

         const transferSchoolList = [
       { payload: '1', text: 'None' },
       { payload: '2', text: 'Dutchess Community College'},
    ];
    return (
    <div desktop={true} width={320}>
      <div className="CourseSelectionPage-container">   
      <Grid>
      <Col  xs={4} md={4} lg={4}>
        <Row className="">
          <TransferCourseTable></TransferCourseTable>
        </Row>      
      </Col>
      <Col  xs={4} md={4} lg={4}>
         <Row className="center">
            <p className="currentSchoolLabel"> <strong> Current College/University </strong> </p>
           <DropDownMenu className="currentSchoolDropbox" menuItems={transferSchoolList}/>
          </Row>
          <Row className="centerButton">
           <RaisedButton label="Add Course" secondary={true} />
          </Row>
          <Row className="centerButton">
            <RaisedButton label="Remove Course" secondary={true} />
            </Row>
          <Row className="centerButton">
            <RaisedButton label="Submit Course List" secondary={true} />
          </Row>
      </Col>
      <Col xs={4} md={4} lg={4}>
        <Row className="">
          <TransferCourseTable></TransferCourseTable>
        </Row>
      </Col>
  </Grid>

      </div>
    </div>
    );
  }
}
export default CourseSelectionPage;