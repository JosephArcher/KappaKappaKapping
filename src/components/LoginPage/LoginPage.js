/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './LoginPage.css';
import withStyles from '../../decorators/withStyles';
import {Form} from 'react-bootstrap';
import {Input} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';


@withStyles(styles)
class LoginPage extends Component {



  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {

    const title = 'Log In';

   const inputSizeInstance = (
   <div>
    <Grid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xsPush={3} smPush={3} mdPush={3} lgPush={3}> 
          <form className="centeredLoginForm">
            <h1> {title} </h1>
            <Input className="test" type="text" bsSize="large" placeholder="Username" />
            <Input className="test"type="text" bsSize="large" placeholder="Password" />
            <Button className="test"bsStyle="primary" block bsSize="large">Submit</Button>
          </form>
      </Col>
    </Row>
   </Grid>
  </div>
   
);

    this.context.onSetTitle(title);
    return (
       <div desktop={true} width={320}>
        <div className="LoginPage-container">
            {inputSizeInstance}
        </div>
      </div>
    );

  }

}

export default LoginPage;
