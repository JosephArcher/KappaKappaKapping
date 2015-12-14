/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './RegisterPage.css';
import {Form} from 'react-bootstrap';
import {Input} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import DropdownButton from 'react-bootstrap';
const injectTapEventPlugin = require("react-tap-event-plugin");
import Link from '../Link';
import Welcome from '../Welcome';
const DoughnutChart = require("react-chartjs").Doughnut;
import UserActions from '../../actions/UserActions';
import userStore from '../../stores/userStore';
import {Alert} from 'react-bootstrap';


@withStyles(styles)
class RegisterPage extends Component {
  static propTypes = {
    input: PropTypes.string,
    actions: PropTypes.object,
    test: PropTypes.string
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };


static  progressPercent = 0;

  componentDidMount() {

    var progressPercent = this.props.progressPercent;
    this.setState( { progressPercent: progressPercent } );

  };

  render() {

    const title = 'Student Registration';
    this.context.onSetTitle(title);


    return (

     <div desktop={true} width={320}>
 <div id="test" value= "0"></div>
      <div className="RegisterPage-container ">
      <Grid>
        <div>
        <form className="centeredLoginForm">
        <h1>{title}</h1>


        <Row>
          <Col xs={6} md={6} lg={6}>
                <Input type="text" bsSize="large" placeholder="Username" id="userName" onChange={this.fnInput}  />
                <Input type="text" bsSize="large" placeholder="First Name" id="firstName"  />
                <Input type="text" bsSize="large" placeholder="Last Name" id="lastName"/>
                <Input type="password" bsSize="large" placeholder="Password" id="password"/>
                <Input type="text" bsSize="large" placeholder="Email" id="email"/>
                <Input type="text" bsSize="large" placeholder="Phone Number" id ="phoneNumber"/>
          </Col>
           <Col xs={6} md={6} lg={6}>

                    <Input bsSize="large" type="select" id= "major">
                     <option value="Not Selected">Intended Major</option>
                     <option value="Not Sure Yet">Not Sure Yet</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Math">Math</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Business">Business</option>
                      <option value="Communications">Communications</option>
                  </Input>

                <Input bsSize="large" type="select" id= "startDate" >
                     <option value="01-01-01">Intended Start Date</option>
                     <option value="02-01-16">Spring 2016</option>
                      <option value="09-01-16">Fall 2016</option>
                      <option value="02-01-17">Spring 2017</option>
                      <option value="09-01-17">Fall 2017</option>
                      <option value="02-01-18">Spring 2018</option>
                      <option value="09-01-18">Fall 2018</option>
                  </Input>

                  <Input bsSize="large" type="select" id = "currentSchool">
                     <option value="DCC0000001">Current School</option>
                     <option value="DCC0000001">Dutchess Community College</option>
                  </Input>

          </Col>
      </Row>
       <Button bsStyle="primary" block bsSize="large"  onClick={this.registerUser}>Submit</Button>
       <Input type="hidden" value="0" id="pc"/>
       </form>
    </div>
  </Grid>
        </div>
      </div>
    );
  }

    registerUser() {
      //if fields are not input
      var pc   = parseInt(document.getElementById("pc").value);
      if(pc > 0 ){
      var us = document.getElementById("userName").value;
      var fn = document.getElementById("firstName").value;
      var ln   = document.getElementById("lastName").value;
      var pw = document.getElementById("password").value;
      var em   = document.getElementById("email").value;
      var pn = document.getElementById("phoneNumber").value;
      var ma   = document.getElementById("major").value;
      var sd = document.getElementById("startDate").value;
      var cs   = document.getElementById("currentSchool").value;
      UserActions.registerUser(us, fn, ln, pw, em, pn, ma, sd, cs);
    }else{
      console.log("Not completed");
      // BootstrapDialog.
      alert("Registration Not Complete.");
        }
    }




       fnInput() {

       // pc.percentComplete = pc.percentComplete + 1;
      var pc   = parseInt(document.getElementById("pc").value);
      var us = document.getElementById("userName").value;
      if(us === ""){
        document.getElementById("pc").value = 0;
      }else
      {
        document.getElementById("pc").value = 1
      // document.getElementById("pc").value = pc + 1;
      }
      console.log("here");
      console.log(document.getElementById("pc").value);

    }





}



export default RegisterPage;
