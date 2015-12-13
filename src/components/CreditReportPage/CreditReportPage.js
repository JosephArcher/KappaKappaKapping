import React ,{ PropTypes, Component } from 'react';
import styles from './CreditReportPage.css';
import withStyles from '../../decorators/withStyles';
import {Button} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Label} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
const injectTapEventPlugin = require("react-tap-event-plugin");
import CourseTable from '../CourseTable';
import CourseItem from '../CourseItem';
import MajorItem from '../MajorItem';
const DoughnutChart = require("react-chartjs").Doughnut;

import CourseSelectionStore from '../../Stores/CourseSelectionStore';
import CourseSelectionPageActions from '../../actions/CourseSelectionPageActions';


@withStyles(styles)
class CreditReportPage extends React.Component {

  static propTypes = {

     // CompletedCourses: PropTypes.array.isRequired
     };

 

 render() {
    // This is the response object from the API Call
  //  const Response = this.props.CompletedCourses;

    // Break Apart the Response object then use it to populate the report
    const title = "Credit Report";
 
  var Response = CourseSelectionStore.getCourseReport();
  const Response2 = Response.cl;
  const Response3 = JSON.parse(Response2);
    const totalNumberOfCredits        = Response3[0].Total_Credits;
    const numberOfTransferableCredits = Response3[1].Credits_Transfered;
    const transferableCourses         = Response3[2].Transferable_Courses;
    const nonTransferableCourses      = Response3[3].Non_Transferable_Courses;
    const topThreeMajors               = Response3[4].Top_Three_Programs;
    
    const testCalc =  Math.round((numberOfTransferableCredits / totalNumberOfCredits) * 100);

    // Sort the top three majors by percentage desc;
  
   
 console.log(topThreeMajors + " t3 B4");

  topThreeMajors.sort(function(a, b) {
  return    b.Percent_Complete - a.Percent_Complete;
});
   console.log(topThreeMajors + " t3   AF");

    const Major1                      = topThreeMajors[0].Program_Name;
    const Major2                      = topThreeMajors[1].Program_Name;
    const Major3                      = topThreeMajors[2].Program_Name;
    const Major1p                      = topThreeMajors[0].Percent_Complete + 0;
    const Major2p                      = topThreeMajors[1].Percent_Complete + 0;
    const Major3p                      = topThreeMajors[2].Percent_Complete + 0;


    const testdata = [
    {
        value: testCalc,
        color: "#007fff",
        highlight: "#00ffff"
    },
     {
        value: 100 - testCalc,
        color: "#FFFFFF",
        highlight: "#ff0000"
    }
  ];
    return (
    <div desktop={true} width={320}>
      <div className="CreditReportPage-container">   
      <Grid>

    <Row>
      <Col xs={12} md={12} lg={12}> 
        <div className="centerText">
         <p> <span className="reportHeading centerText"> Marist Compatibility Report </span> </p>
        </div>
        <div className="verticalLine">
        </div>
      </Col>
    </Row>
    <Row>

      <Col xs={12} sm={12} md={12} lg={12}> 
       <span className ="sectionHeading"> Credit Breakdown </span> 
      </Col>

       <Col xs={12} sm={12} md={12} lg={12}> 
         <p className="centerText otherHeading"> <span className="slightLeftShift"> {numberOfTransferableCredits} / {totalNumberOfCredits}  Credits are transferable ! </span>   <DoughnutChart data={testdata} width="100" height="100" />  </p>
      </Col> 

       <Col xs={12} md={12} lg={12}> 
        <div className="verticalLine">
          </div>
       </Col>
    </Row>

     <Row>
      <Col xs={12} sm={12} md={12} lg={12} > 
       <span className ="sectionHeading"> Course Breakdown </span> 
      </Col>
       <Col xs={12} sm={12} md={12} lg={12}>
          <Col xs={6} sm={6} md={6} lg={6} >
           <CourseTable tableTitle="Transferable" courseList={transferableCourses} > </CourseTable>
           </Col>
           <Col xs={6} sm={6} md={6} lg={6} >
            <CourseTable tableTitle="Non Transferable" courseList={nonTransferableCourses}> </CourseTable>
           </Col>
        </Col>
       <Col xs={12} md={12} lg={12}> 
       <div className="verticalLine">
        </div>
        </Col>
    </Row>
    <Row>
      <Col xs={12} md={12} lg={12}> 
        <div>
          <span className="sectionHeading" > Major Breakdown </span>
        </div>
      </Col>
      <Col xs={12} md={12} lg={12}> 
        <MajorItem majorTitle = {Major1} majorPercent={Major1p}> </MajorItem>
        <MajorItem majorTitle = {Major2} majorPercent={Major2p}> </MajorItem> 
        <MajorItem majorTitle = {Major3} majorPercent={Major3p}> </MajorItem> 
      </Col>
    </Row>
  </Grid>
      </div>
    </div>
    );
  }
}
export default CreditReportPage;