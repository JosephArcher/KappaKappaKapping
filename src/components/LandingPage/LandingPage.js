/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './AboutPage.css';
import {Card} from 'elemental';
import  Glyph from 'elemental';
import {Form} from 'react-bootstrap';
import {Input} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import DropdownButton from 'react-bootstrap';
const injectTapEventPlugin = require("react-tap-event-plugin");
import Link from '../Link';
import Welcome from '../Welcome';

@withStyles(styles)
class LandingPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };
  
  render() {

    const title = 'Hello Friend';
    this.context.onSetTitle(title);

     const inputSizeInstance = (
    <div>
     <Grid>
      <h1>{title}</h1>
     	<Row>
     		Hello Dad
     	</Row>
  	</Grid>
    </div>
    );
    return (
      <div desktop={true} width={320}>
        <div className="AboutPage-container">
        {inputSizeInstance}       
        </div>
      </div>
    );
  }

}

export default LandingPage;

