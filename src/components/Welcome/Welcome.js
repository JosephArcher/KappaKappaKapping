/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React ,{ PropTypes, Component } from 'react';

import styles from './Welcome.css';
import withStyles from '../../decorators/withStyles';
import { Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import Link from '../Link';
import Profile from '../profile';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Popover} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';

@withStyles(styles)
class Welcome extends React.Component{

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

 render() {
    const title = 'Welcome';
    this.context.onSetTitle(title);
    return (

        <div className="Welcome-container">
          <Grid>

             <Col xs={12} sm={12} md={12} lg={12}>
              <h1>
               {title}
               <span style={{paddingLeft: "10px"}}>
                  <OverlayTrigger trigger="hover" placement="right" overlay={<Popover title="Update Programs">Here you can remove requirements from a program or add a requirement by entering its CRN in the menu below.</Popover>}>
                    <Glyphicon glyph="glyphicon glyphicon-question-sign" />
                  </OverlayTrigger>
               </span>
              </h1>


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
                          onClick={this.logout}>
              Log out the current user
            </ListGroupItem>
          </ListGroup>
            </Col>
          </Grid>
        </div>
    );
  }
}
export default Welcome;
