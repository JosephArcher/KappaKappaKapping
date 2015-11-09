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
import {Courses} from '../../constants/testdata';
import {CompletedCourses}  from '../../constants/testdata';

// Components 
import TransferCoursesTable  from '../TransferCoursesTable';
import CompletedCoursesTable  from '../CompletedCoursesTable';

// Stores
import CourseSelectionStore from '../../Stores/CourseSelectionStore';


@withStyles(styles)
class CourseSelectionPage extends React.Component {

  constructor() {
    super();
    this.state = CourseSelectionStore.getCourseSelectionState();
  }
  componentDidMount() {
    CourseSelectionStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
   CourseSelectionStore.removeChangeListener(this._onChange);
  }
  update() {
    this.setState( getCourseSelectionState() );
  }
   _onChange () {
    console.log("A CHANGE HAS OCCURED");
      this.state = CourseSelectionStore.getCourseSelectionState();
  } 
  render() {
    console.log("THE PAGE IS BEING RE RENDERED");
    const title = 'Course Selection Pag';
    const step1 = 'Step 1: Choose your current school';
    const step2 = 'Step 2: Select the courses you have completed';
    const step3 =  'Step 3: Calculate your transferable credits';
    const submitCourseButtonValue = "Submit Completed Courses";
    const DCC = "DCC";

    console.log("hey");
    console.log(this.state.completedCourses);
    const schoolSelection =  (
      <Col xs={12} md={12} lg={12}> 
        <div>
         <span className="stepHeading">  {step1} </span>
          <DropdownButton bsSize="large" title="School / University" id="dropdown-size-large" className="currentSchoolDropbox">
            <MenuItem> {DCC} </MenuItem>
          </DropdownButton>
          <div className="verticalLine">
          </div>
        </div>
      </Col>
    );
    const courseSelection = (
      <Col xs={12} md={12} lg={12}> 
        <div>
          <span className="stepHeading">{step2}</span>
        </div>
          <Row>
            <Col xs={5} md={5} lg={5}>
              <div className="submitCourseSection">
                <TransferCoursesTable availableTransferCourses={this.state.availableTransferCourses}></TransferCoursesTable>
              </div>
            </Col>
            <Col xs={2} md={2} lg={2}>
            </Col>
            <Col xs={5} md={5} lg={5}>
              <CompletedCoursesTable CompletedCourses={this.state.completedCourses}></CompletedCoursesTable>
            </Col>
          </Row>
          <div className="verticalLine">
          </div>
      </Col>
    );

    const submitSection = (
      <Col xs={12} md={12} lg={12}> 
        <div>
          <span className="stepHeading">{step3}</span>
        </div>
        <div className="submitCourseSection">
           <Button bsStyle="primary" bsSize="large" block>{submitCourseButtonValue}</Button>
        </div>
      </Col>
    );

    return (
      <div desktop={true} width={320}>
        <div className="CourseSelectionPage-container">   
         <Grid>
            <Row>
                {schoolSelection}
            </Row>
             <Row> 
                {courseSelection}
            </Row>
            <Row>
                {submitSection}
            </Row>
        </Grid>
      </div>
    </div>
    );
  }

}
export default CourseSelectionPage;
