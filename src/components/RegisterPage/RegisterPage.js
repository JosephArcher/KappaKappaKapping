/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './RegisterPage.css';
const TextField = require('material-ui/lib/text-field');
const RaisedButton = require('material-ui/lib/raised-button');
const DropDownMenu  = require('material-ui/lib/drop-down-menu');
const injectTapEventPlugin = require("react-tap-event-plugin");
import Link from '../Link';
import Welcome from '../Welcome';


@withStyles(styles)
class RegisterPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };
  




  render() {
    injectTapEventPlugin();



    const title = 'New User Registration';
    this.context.onSetTitle(title);
    const intendedStartDates = [
       { payload: '1', text: '' },
       { payload: '2', text: 'Spring 2016' },
       { payload: '3', text: 'Fall 2016' },
       { payload: '4', text: 'Spring 2017' },
       { payload: '5', text: 'Fall 2017' },
       { payload: '6', text: 'Spring 2018' },
    ];
    const preferredMajors = [
       { payload: '1', text: '' },
       { payload: '2', text: 'Computer Science' },
       { payload: '3', text: 'Math' },
       { payload: '4', text: 'Physics' },
       { payload: '5', text: 'Engineering' },
    ];
    const currentSchools = [
       { payload: '1', text: '' },
       { payload: '2', text: 'Dutchess Community College' },

    ];

   
function handleNav(event) {
console.log("yo");
};


   
    return (
      <div className="RegisterPage">
        <div className="RegisterPage-container">
          <h1>{title}</h1>
       

          <div className="RegisterPage-left">
            <div><TextField hintText="First Name" /></div>
            <div><TextField hintText="Last Name" /></div>
            <div><TextField hintText="Current School" /></div>
            <div><TextField hintText="Email" /></div>
            <div><TextField hintText="Address" /></div>
            <div><TextField hintText="Phone Number" /></div>
            <div><TextField hintText="Birthdate" /></div>

          </div>
          

            <div className="RegisterPage-right">
              <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Intended Start Date</span> 
                    <br></br
                    ><DropDownMenu menuItems={intendedStartDates} onChange={this.handleNav}/>
              </div>
              <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Preferred Major</span> 
                    <br></br
                    ><DropDownMenu menuItems={preferredMajors} onChange={this.handleNav}/>
              </div>
              <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Current School</span> 
                    <br></br
                    ><DropDownMenu menuItems={currentSchools} onChange={this.handleNav}/>
              </div><br></br>
                          <div>&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;<a className="Navigation-link" href="/welcome" onClick={Link.handleClick}>
                          <RaisedButton className="button" label="Submit" /></a></div>
         

            </div>

  


          </div>
        </div>
      
    );
  }

}

export default RegisterPage;
