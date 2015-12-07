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

    const johnBlurb = (
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. 
            Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
             Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, 
             iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti 
             sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscin.
        </div>


    );

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
        					<p>linkedin: <span> <a href="https://www.linkedin.com/" /> Joseph.Archer1@Marist.edu </span> </p>
        				</Col>
        			</Row>
     			</Card>
     		</Col>
     		 <Col xs={6} md={6} lg={6}> 
     			<Card>
     			<p className="memberName"> About Joe </p>
     			<div className="verticalLine"> </div>
     			   {johnBlurb}
     			</Card>
     		</Col>	
     	</Row>
     		<Row>
     		<Col xs={6} md={6} lg={6}> 
     			<Card>
     			<p className="memberName"> About John </p>
     			<div className="verticalLine"> </div>
                {johnBlurb}
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
        					<p>GitHub:    <span> <a href="https://github.com/JosephArcher" /> https:\\github.com\AlexHochberg </span> </p>
        					<p>linkedin: <span> <a href="https://www.linkedin.com/" />  www.linkedin.com\AlexHochberg</span> </p>
        				</Col>
        			</Row>
     			</Card>
     		</Col>
     		 <Col xs={6} md={6} lg={6}> 
     			<Card>
     			<p className="memberName"> About Alex </p>
     			<div className="verticalLine"> </div>
                   {johnBlurb}
     			</Card>
     		</Col>	
     	</Row> 	

     	<Row>
     		<Col xs={6} md={6} lg={6}> 
     			<Card>
     			<p className="memberName"> About Justin </p>
     			<div className="verticalLine"> </div>
                   {johnBlurb}
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
        					<p>linkedin: <span> <a href="https://www.linkedin.com/johnprisco" /> www.linkedin.com/ChrisDellaDonna</span> </p>
        				</Col>
        			</Row>
     			</Card>
     		</Col>
     		 <Col xs={6} md={6} lg={6}> 
     			<Card>
     			<p className="memberName"> About Chris </p>
     			<div className="verticalLine"> </div>
                   {johnBlurb}
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

