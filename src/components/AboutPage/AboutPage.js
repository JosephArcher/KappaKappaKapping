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
class AboutPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };
  
  render() {

    const title = 'About Us';
    this.context.onSetTitle(title);

     const inputSizeInstance = (
    <div>
     <Grid>
      <h1>{title}</h1>

     	<Row>
     		<Col xs={6} md={6} lg={6}> 
     			<Card>
     				<Row> 
     					<Col xs={12} sm={12} md={12} lg={6}> 
        					<Image className="memberPicture" src={require('./joeAboutPic.jpg')} width="200" height="250" circle responsive />
        				</Col>
        				<Col xs={12} sm={12} md={12} lg={6} > 
        					<p className="memberName">Joe Archer</p>
        					<div className="verticalLine"> </div>
        					<p>Email:  <span> <a href="Joseph.Archer1@Marist.edu" /> Joseph.Archer1@Marist.edu </span> </p>
        					<p>GitHub:    <span> <a href="https://github.com/JosephArcher" /> Joseph.Archer1@Marist.edu </span> </p>
        					<p>Facebook: <span> <a href="https://www.facebook.com/Joseph.Ellison.Archer" /> Joseph.Archer1@Marist.edu </span> </p>
        					<p>linkedin: <span> <a href="https://www.linkedin.com/" /> Joseph.Archer1@Marist.edu </span> </p>
        				</Col>
        			</Row>
     			</Card>
     		</Col>
     		 <Col xs={6} md={6} lg={6}> 
     			<Card>
     			<p className="memberName"> About Joe </p>
     			<div className="verticalLine"> </div>
     			<div>
     			<p> Joe is currently a Senior at Marist College studying Computer Science. He is currently working at IBM </p>
     			</div>
     			</Card>
     		</Col>	
     	</Row>
     		<Row>
     		<Col xs={6} md={6} lg={6}> 
     			<Card>
     			<p className="memberName"> About John </p>
     			<div className="verticalLine"> </div>
     			</Card>
     		</Col>
     		 <Col xs={6} md={6} lg={6}> 
     			<Card>
     				<Row> 
     					<Col xs={12} sm={12} md={12} lg={6}> 
        					<Image className="memberPicture" src={require('./johnAboutPic.jpg')} width="200" height="250" circle responsive />
        				</Col>
        				<Col xs={12} sm={12} md={12} lg={6} > 
        					<p className="memberName">John Prisco</p>
        					<div className="verticalLine"> 
        					</div>
						
        					<p>Email:  <span> <a href="John.Priso1@Marist.edu" /> John.Prisco1@Marist.edu </span> </p>
        					<p>GitHub:    <span> <a href="https://github.com/JohnPrisco" /> https:\/\/github.com/JohnPrisco </span> </p>
        					<p>Facebook: <span> <a href="https://www.facebook.com/johnprisco" /> https:\/\/www.facebook.com/johnprisco </span> </p>
        					<p>linkedin: <span> <a href="https://www.linkedin.com/johnprisco" /> www.linkedin.com/johnprisco</span> </p>
        				</Col>
        			</Row>
     			</Card>
     		</Col>	
     	</Row>

     	<Row>
     		<Col xs={6} md={6} lg={6}> 
     			<Card>
     				<Row> 
     					<Col xs={12} sm={12} md={12} lg={6}> 
        					<Image className="memberPicture" src={require('./alexAboutPic.jpg')} width="200" height="250" circle responsive />
        				</Col>
        				<Col xs={12} sm={12} md={12} lg={6} > 
        					<p className="memberName">Alex Hochberg</p>
        					<div className="verticalLine"> 
        					</div>
						
        					<p>Email:  <span> <a href="Joseph.Archer1@Marist.edu" /> Alex.Hochberg1@Marist.edu </span> </p>
        					<p>GitHub:    <span> <a href="https://github.com/JosephArcher" /> https:\/\/github.com/AlexHochberg </span> </p>
        					<p>Facebook: <span> <a href="https://www.facebook.com/Joseph.Ellison.Archer" /> https:\/\/www.facebook.com/alex.hochberg.52 </span> </p>
        					<p>linkedin: <span> <a href="https://www.linkedin.com/" />  www.linkedin.com/AlexHochberg</span> </p>
        				</Col>
        			</Row>
     			</Card>
     		</Col>
     		 <Col xs={6} md={6} lg={6}> 
     			<Card>
     			<p className="memberName"> About Alex </p>
     			<div className="verticalLine"> </div>

     			</Card>
     		</Col>	
     	</Row> 	

     	<Row>
     		<Col xs={6} md={6} lg={6}> 
     			<Card>
     			<p className="memberName"> About Justin </p>
     			<div className="verticalLine"> </div>
     			</Card>
     		</Col>
     		 <Col xs={6} md={6} lg={6}> 
     			<Card>
     				<Row> 
     					<Col xs={12} sm={12} md={12} lg={6}> 
        					<Image className="memberPicture" src={require('./justinAboutPic.jpg')} width="200" height="250" circle responsive />
        				</Col>
        				<Col xs={12} sm={12} md={12} lg={6} > 
        					<p className="memberName">Justin Esposito</p>
        					<div className="verticalLine"> 
        					</div>
						
        					<p>Email:  <span> <a href="John.Priso1@Marist.edu" /> Justin.Esposito1@Marist.edu </span> </p>
        					<p>GitHub:    <span> <a href="https://github.com/JohnPrisco" /> https:\/\/github.com/JustinEsposito </span> </p>
        					<p>Facebook: <span> <a href="https://www.facebook.com/johnprisco" /> https:\/\/www.facebook.com/JustinEsposito </span> </p>
        					<p>linkedin: <span> <a href="https://www.linkedin.com/johnprisco" /> www.linkedin.com/Justin Esposito</span> </p>
        				</Col>
        			</Row>
     			</Card>
     		</Col>	
     	</Row>

     	<Row>
     		<Col xs={6} md={6} lg={6}> 
     			<Card>
     				<Row> 
     					<Col xs={12} sm={12} md={12} lg={6}> 
        					<Image className="memberPicture" src={require('./chrisAboutPic.jpg')} width="200" height="250" circle responsive />
        				</Col>
        				<Col xs={12} sm={12} md={12} lg={6} > 
        					<p className="memberName">Chris DellaDonna</p>
        					<div className="verticalLine"> 
        					</div>
        					<p>Email:  <span> <a href="John.Priso1@Marist.edu" /> Chris.DellaDonna1@Marist.edu </span> </p>
        					<p>GitHub:  <span> <a href="https://github.com/JohnPrisco" /> https:\/\/github.com/ChrisDellaDonna </span> </p>
        					<p>Facebook: <span> <a href="https://www.facebook.com/johnprisco" /> https:\/\/www.facebook.com/ChrisDellaDonna </span> </p>
        					<p>linkedin: <span> <a href="https://www.linkedin.com/johnprisco" /> www.linkedin.com/ChrisDellaDonna</span> </p>
        				</Col>
        			</Row>
     			</Card>
     		</Col>
     		 <Col xs={6} md={6} lg={6}> 
     			<Card>
     			<p className="memberName"> About Chris </p>
     			<div className="verticalLine"> </div>
     			</Card>
     		</Col>	
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

export default AboutPage;

