import React ,{ PropTypes, Component } from 'react';
import styles from './CourseSelectionPage.css';
import withStyles from '../../decorators/withStyles';
import {Button} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Label} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';

const injectTapEventPlugin = require("react-tap-event-plugin");
import TransferCoursesTable from '../TransferCoursesTable';
import CompletedCoursesTable from '../CompletedCoursesTable';
import CourseSelectionPageStore from '../../Stores/CourseSelectionPageStore';

/**
 * Get the Current School options from the Store
 *
 */
function getAllTransferSchools() {
  return {
    allTransferSchools: CourseSelectionPageStore.getAllTransferSchools()
  };
}

/**
* Get the initial state from the Store
*
*/

@withStyles(styles)
class CourseSelectionPage extends React.Component {





  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    currentSchool: PropTypes.string
  };

 render() {
       const currentSchools = [
       { payload: '1', text: '' },
       { payload: '2', text: 'Dutchess Community College' },
    ];
    const title = 'Course Selection Pag';
    const step1 = 'Step 1: Choose your current school';
    const step2 = 'Step 2: Select the courses you have completed';
    const step3 =  'Step 3: Calculate your transferable credits';

    const currentSchoolDrop =  (
        <DropdownButton bsSize="large" title="School / University" id="dropdown-size-large" className="currentSchoolDropbox">
        <MenuItem> DCC </MenuItem>
      </DropdownButton>
      );
    return (
    <div desktop={true} width={320}>
      <div className="CourseSelectionPage-container">   
      <Grid>
    <Row>
      <Col xs={12} md={12} lg={12}> 
        <div className="submitCourseSection">
        <span className="stepHeading">  {step1} </span>
        <span> {currentSchoolDrop} </span>
        </div>
        <div className="verticalLine">
        </div>
      </Col>
    </Row>
    <Row>
     <Col xs={12} md={12} lg={12}> 
      <div>
      <span className="stepHeading">  {step2} </span>
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
        <span className="stepHeading">{step3} </span>
        </div>
        <div className="submitCourseSection">
           <Button bsStyle="primary" bsSize="large" block> Submit Completed Courses </Button>
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