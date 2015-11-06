/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React ,{ PropTypes, Component } from 'react';

import styles from './Welcome.css';
import withStyles from '../../decorators/withStyles';
const TextField = require('material-ui/lib/text-field');
const RaisedButton = require('material-ui/lib/raised-button');
import { Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
const ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
import Link from '../Link';
import Profile from '../profile';

@withStyles(styles)
class Welcome extends React.Component{

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

 render() {
    const userName = "Joe";
    const title = 'Welcome, ' + userName;
    this.context.onSetTitle(title);
    return (
      <div className="Welcome" desktop={true} width={320}>
        <div className="Welcome-container">
          <h1>{title}</h1>
          <ListGroup>
              <ListGroupItem  className="list-group-item"
                              header="Select Classes"
                              href="/courseselectionpage"   
                              onClick={Link.handleClick}> 
               Check which classes that you took at your previous school for credit admissibility in Marist 
               </ListGroupItem> 

           <ListGroupItem className="list-group-item" 
                              header="Edit Profile"   
                              href="/profile" onClick={Link.handleClick}> 
              Edit your personal information 
              </ListGroupItem> 
    
           <ListGroupItem className="list-group-item" 
                          header="Log Out"        
                          href="/" 
                          onClick={Link.handleClick}>
              Log out the current user
            </ListGroupItem> 
          </ListGroup>
        </div>
      </div>
    );
  }
}
export default Welcome;