import React ,{ PropTypes, Component } from 'react';
import styles from './CourseSelectionPage.css';
import withStyles from '../../decorators/withStyles';
import {Button} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Input} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Label} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
const injectTapEventPlugin = require("react-tap-event-plugin");
import {Courses} from '../../constants/testdata';
import {CompletedCourses}  from '../../constants/testdata';
import Link from '../Link';
import {Popover} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';

// Components
import TransferCoursesTable  from '../TransferCoursesTable';
import CompletedCoursesTable  from '../CompletedCoursesTable';

// Actions
import CourseSelectionPageActions from '../../actions/CourseSelectionPageActions';

// Stores
import CourseSelectionStore from '../../Stores/CourseSelectionStore';

@withStyles(styles)
class CourseSelectionPage extends React.Component {

  getInitialState() {
    return {show: false}
  }

  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.submitCourseReport = this.submitCourseReport.bind(this);
    this.activateButton = this.activateButton.bind(this);
    this.state = CourseSelectionStore.getCourseSelectionState();
    this.submitCourseForm = this.submitCourseForm.bind(this);
  }
  componentDidMount() {
    CourseSelectionStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
   CourseSelectionStore.removeChangeListener(this._onChange);
  }
   _onChange () {
    console.log("A CHANGE HAS OCCURED");
    this.setState( CourseSelectionStore.getCourseSelectionState() );
  }

  submitCourseForm(){
    console.log("Submitting New Course");
    var user = sessionStorage.getItem('user');
    var name = document.getElementById("NewCourseName").value;
    var id = document.getElementById("NewCourseID").value;
    var credits   = document.getElementById("NewCourseCredits").value;
    var descrip = document.getElementById("NewCourseDescription").value;

    CourseSelectionPageActions.submitNewCourse(user, name, id, credits, descrip);

    this.setState({show:false});

  }

  activateButton(){
    console.log("c");
    if(this.state.disabled){
      // API CALL
      CourseSelectionPageActions.submitCourseReport("");
    }
    var intervalID = window.setInterval(myCallback.bind(this), 1500);

    function myCallback() {
      this.setState({disabled: false});
    }


  }

    submitCourseReport() {
        console.log("Submitting Course Report");
        //this.activateButton();
        CourseSelectionPageActions.submitCourseReport("");

    }

  showModal() {
    this.setState({show: true});
  }
  hideModal() {
    this.setState({show:false});
  }

  render() {
    console.log("THE PAGE IS BEING RE RENDERED");
    const title = 'Course Selection Pag';
    const step1 = 'Step 1: Choose your current school';
    const step2 = 'Step 2: Select the courses you have completed';
    const step3 =  'Step 3: Calculate your transferable credits';
    const DCC = "DCC";
    const submitCourseButtonValue = "Submit Completed Courses";
    const seeResultsButtonValue = "See Results";

    const backdropStyle = {
     ...modalStyle,
     zIndex: 'auto',
      backgroundColor: '#000',
  opacity: 0.5
};
 function activateButton(){
    console.log("c");
    this.setState({disable: false});


   }


  function submitCourseReport() {
     console.log("Submitting Course Report");
       CourseSelectionPageActions.submitCourseReport("");

   }
function close(){
    this.setState({ showModal: false });
  }
 function open(){
    this.setState({ showModal: true });
  }

const dialogStyle = function() {
  // we use some psuedo random coords so modals
  // don't sit right on top of each other.
  let top = 50;
  let left = 50 ;

  return {
    position: 'absolute',
    width: 400,
    top: top + '%', left: left + '%',
    transform: `translate(-${top}%, -${left}%)`,
    border: '1px solid #e5e5e5',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20
  };
};

    const modalStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0, bottom: 0, left: 0, right: 0
};

    console.log("hey");
    console.log(this.state.completedCourses);
    const schoolSelection =  (
      <Col xs={12} sm={12} md={12} lg={12}>
        <div>
          <h1>
            {step1}
            <OverlayTrigger trigger="click" placement="right" overlay={<Popover title="School Selection"> Select the school you wish to transfer credits from </Popover>}>
               <span className="helpIcon">  <Glyphicon glyph="glyphicon glyphicon-question-sign" /> </span>
            </OverlayTrigger>
          </h1>
         </div>
        <div>
          <Input bsSize="large" type="select" className="textCenter">
              <option value="other">Dutchess Community College</option>
            </Input>
        </div>
        <div>
           <div className="verticalLine">
           </div>
        </div>
      </Col>
    );
    const courseSelection = (
      <Col xs={12} sm={12} md={12} lg={12}>
        <h1>
          {step2}
          <OverlayTrigger trigger="click" placement="right" overlay={<Popover title="Course Select"> Select the courses you have taken at your previous college </Popover>}>
            <span className="helpIcon">  <Glyphicon glyph="glyphicon glyphicon-question-sign" /> </span>
          </OverlayTrigger>
        </h1>
        <Row>
            <Col xs={5} sm={5} md={6} lg={6}>
              <div>
                  <h1 className="textCenter">Transferable Courses</h1>
              </div>
              <div className="submitCourseSection">
                <TransferCoursesTable availableTransferCourses={this.state.availableTransferCourses}></TransferCoursesTable>
              </div>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
            </Col>
            <Col xs={5} sm={5} md={5} lg={5} className = "testsize" >
               <div>
                  <h1 className="textCenter">Completed Courses</h1>
              </div>
              <CompletedCoursesTable CompletedCourses={this.state.completedCourses}  ></CompletedCoursesTable>
            </Col>
          </Row>
          <div>
             <Button onClick={this.showModal}>
               Report Missing Course
             </Button>
             <Input type="checkbox" label="Contact me with more information"  />
           </div>
          <div className="verticalLine">
          </div>
      </Col>
    );

    const submitSection = (
      <Col xs={12} md={12} lg={12}>
        <div>
          <h1>
            {step3}
            <OverlayTrigger trigger="click" placement="right" overlay={<Popover title="Submit Courses"> After you have selected all of the courses you plan on transfering, press the blue Submit Completed Courses button </Popover>}>
              <span className="helpIcon">  <Glyphicon glyph="glyphicon glyphicon-question-sign" /> </span>
            </OverlayTrigger>
          </h1>
        </div>
        <div className="submitCourseSection">
           <Button bsStyle="primary" block bsSize="large"   onClick={this.activateButton}>{submitCourseButtonValue}</Button>
           <Button id ="sub" bsStyle="primary" bsSize="large" disabled={this.state.disabled}  href="/creditreportpage" onClick={Link.handleClick} block>{seeResultsButtonValue}</Button>
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
              <Modal show={this.state.show} onHide={this.hideModal} dialogClassName="custom-modal" >
               <Modal.Header>
               <Modal.Title id="contained-modal-title-lg"> Report Missing Course </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Transfer Course Request Form</h4>
                <p> In order to help Marist College gather information about the course please provide us with all of the information you can.</p>
                <Input type="text" bsSize="large" placeholder="Course Name" id="NewCourseName"/>
                <Input type="text" bsSize="large" placeholder="Course ID" id="NewCourseID"/>
                <Input type="text" bsSize="large" placeholder="Number of Credits" id="NewCourseCredits"/>
                <Input type="text" bsSize="large" placeholder="Course Description" id="NewCourseDescription"/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.submitCourseForm}>Submit</Button>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
             </Modal>
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
