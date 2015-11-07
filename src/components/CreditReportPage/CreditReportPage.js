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


@withStyles(styles)
class CreditReportPage extends React.Component{

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired, 
  };

 render() {
      
    const title = 'Credit Report';
    const testdata = [
    {
        value: 75,
        color: "#0A0",
        highlight: "#0A0"
    },
     {
        value: 25,
        color: "#FFFFFF",
        highlight: "#FFFFFF"
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
         <p className="centerText otherHeading"> <span className="slightLeftShift"> 75 / 100  Credits are transferable ! </span>   <DoughnutChart data={testdata} width="100" height="100" />  </p>
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
           <CourseTable tableTitle="Transferable"> </CourseTable>
           </Col>
           <Col xs={6} sm={6} md={6} lg={6} >
            <CourseTable tableTitle="Non Transferable"> </CourseTable>
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
        <MajorItem majorTitle = "Computer Science"> </MajorItem>
        <MajorItem majorTitle = "Business">        </MajorItem> 
        <MajorItem majorTitle = "Communications"> </MajorItem> 
      </Col>
    </Row>
  </Grid>
      </div>
    </div>
    );
  }
}
export default CreditReportPage;