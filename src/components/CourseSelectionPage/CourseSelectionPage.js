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

// Stores
import CourseSelectionStore from '../../Stores/CourseSelectionStore';

@withStyles(styles)
class CourseSelectionPage extends React.Component {

  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = CourseSelectionStore.getCourseSelectionState();
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
 
  render() {
    console.log("THE PAGE IS BEING RE RENDERED");
    const title = 'Course Selection Pag';
    const step1 = 'Step 1: Choose your current school';
    const step2 = 'Step 2: Select the courses you have completed';
    const step3 =  'Step 3: Calculate your transferable credits';
    const submitCourseButtonValue = "Submit Completed Courses";
    const DCC = "DCC";

    const backdropStyle = {
  ...modalStyle,
  zIndex: 'auto',
  backgroundColor: '#000',
  opacity: 0.5
};

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
        <OverlayTrigger trigger="hover" placement="right" overlay={<Popover title="School Selection"> Select the school you wish to transfer credits from </Popover>}>
           <p> <span className="stepHeading">{step1} </span>  <span className="pull-right helpIcon">  <Glyphicon glyph="glyphicon glyphicon-question-sign" /> </span> </p>
           </OverlayTrigger>
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
        <OverlayTrigger trigger="hover" placement="right" overlay={<Popover title="Course Select"> Select the courses you have taken at your previous college </Popover>}>
          <p> <span className="stepHeading">{step2} </span>  <span className="pull-right helpIcon">  <Glyphicon glyph="glyphicon glyphicon-question-sign" /> </span> </p>
        </OverlayTrigger>
        <Row>
            <Col xs={5} sm={5} md={6} lg={6}>
              <div>
                  <h1 className="textCenter">Transferable Courses</h1>
              </div>
              <div className="submitCourseSection">
                <TransferCoursesTable availableTransferCourses={this.state.availableTransferCourses}></TransferCoursesTable>
              </div>
              <div>
                <Button>
                  Report Missing Course
                </Button>
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
          <div className="verticalLine">
          </div>
      </Col>
    );

    const submitSection = (
      <Col xs={12} md={12} lg={12}> 
        <div>
          <OverlayTrigger trigger="hover" placement="right" overlay={<Popover title="Submit Courses"> After you have selected all of the courses you plan on transfering, press the blue Submit Completed Courses button </Popover>}>
            <p> <span className="stepHeading">{step3} </span>  <span className="pull-right helpIcon">  <Glyphicon glyph="glyphicon glyphicon-question-sign" /> </span> </p>
            </OverlayTrigger>
        </div>
        <div className="submitCourseSection">
           <Button bsStyle="primary" bsSize="large"  href="/creditreportpage" onClick={Link.handleClick} block>{submitCourseButtonValue}</Button>
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
              <Modal
                aria-labelledby='modal-label'
                style={modalStyle}
                backdropStyle={backdropStyle}
                show={this.state.showModal}
                onHide={this.close}>

                <div style={dialogStyle()} >
                <h4 id='modal-label'>Text in a modal</h4>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                  <input autoFocus/>
            
          </div>
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
