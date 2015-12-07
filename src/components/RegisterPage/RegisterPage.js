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
import {Popover} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';

@withStyles(styles)
class RegisterPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };
  
  render() {

    const title = 'Student Registration';
    this.context.onSetTitle(title);

    return (
     <div desktop={true} width={320}>
      <div className="RegisterPage-container ">   
      <Grid>
      <OverlayTrigger trigger="hover" placement="right" overlay={<Popover title="School Selection"> Select the school you wish to transfer credits from </Popover>}>
           <p className="topMargin"> <span className="stepHeading">{title} </span>  <span className="pull-right helpIcon">  <Glyphicon glyph="glyphicon glyphicon-question-sign" /> </span> </p>
           </OverlayTrigger>
        <div>
        <form className="centeredLoginForm">
        
        <Row>
          <Col xs={6} md={6} lg={6}> 
       
                <Input type="text" bsSize="large" placeholder="First Name" />
                <Input type="text" bsSize="large" placeholder="Last Name" />
                <Input type="text" bsSize="large" placeholder="Email" />
                <Input type="text" bsSize="large" placeholder="Phone Number" />
                <Input type="text" bsSize="large" placeholder="Birthdate"/>
          </Col>
           <Col xs={6} md={6} lg={6}> 

                    <Input bsSize="large" type="select">
                     <option value="select">Intended Major</option>
                     <option value="other">Not Sure Yet</option>
                      <option value="other">Computer Science</option>
                      <option value="other">Math</option>
                      <option value="other">Fashion</option>
                      <option value="other">Business</option>
                      <option value="other">Communications</option>
                  </Input>

                <Input bsSize="large" type="select">
                     <option value="select">Intended Start Date</option>
                     <option value="other">Spring 2016</option>
                      <option value="other">Fall 2016</option>
                      <option value="other">Spring 2017</option>
                      <option value="other">Fall 2017</option>
                      <option value="other">Spring 2018</option>
                      <option value="other">Fall 2018</option>
                  </Input>

                  <Input bsSize="large" type="select">
                     <option value="select">Current School</option>
                     <option value="other">Dutchess Community College</option>
                  </Input>
          </Col>
      </Row>
       <Button bsStyle="primary" block bsSize="large">Submit</Button>
       </form>
    </div>
  </Grid>
        </div>
      </div>
    );
  }

}

export default RegisterPage;
