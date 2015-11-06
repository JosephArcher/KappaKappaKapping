import React ,{ PropTypes, Component } from 'react';
import styles from './CourseSelectionPage.css';
import withStyles from '../../decorators/withStyles';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Label} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
const DropDownMenu  = require('material-ui/lib/drop-down-menu');
const injectTapEventPlugin = require("react-tap-event-plugin");
import TransferCoursesTable from '../TransferCoursesTable';
import CompletedCoursesTable from '../CompletedCoursesTable';


@withStyles(styles)
class CourseSelectionPage extends React.Component{

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired, 
  };

 render() {
      injectTapEventPlugin();
       const currentSchools = [
       { payload: '1', text: '' },
       { payload: '2', text: 'Dutchess Community College' },

    ];
    const title = 'Course Selection Page';
    return (
    <div desktop={true} width={320}>
      <div className="CourseSelectionPage-container">   
      <Grid>
    <Row>
      <Col xs={12} md={12} lg={12}> 
        <div className="submitCourseSection">
        <span className="stepHeading"> Step 1: Choose your current school </span>
        </div>
        <div className="verticalLine">
        </div>
      </Col>
    </Row>
    <Row>
     <Col xs={12} md={12} lg={12}> 
      <div>
      <span className="stepHeading"> Step 2: Select the courses you have completed </span>
      </div>
      <Row>
        <Col xs={5} md={5} lg={5}>
        <div className="submitCourseSection">
          <TransferCoursesTable> </TransferCoursesTable>
          </div>
       </Col>
        <Col xs={2} md={2} lg={2}>
       </Col>
        <Col xs={5} md={5} lg={5}>
          <CompletedCoursesTable> </CompletedCoursesTable>
        </Col>
      </Row>
      <div className="verticalLine">
      </div>
      </Col>
      </Row>
      <Row>
      <Col xs={12} md={12} lg={12}> 
        <div>
        <span className="stepHeading"> Step 3: Calculate your transferable credits</span>
        </div>
        <div className="submitCourseSection">
        <Button bsStyle="primary" bsSize="large" block>Submit Course List</Button>
        </div>
      </Col>
    </Row>
  </Grid>
      </div>
    </div>
    );
  }
}
export default CourseSelectionPage;