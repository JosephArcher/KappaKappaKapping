/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './AboutPage.css';
import {Jumbotron} from 'react-bootstrap';
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


    const joeInfo = (
        <div>
            <p className="memberName">Joe Archer</p>
            <div className="verticalLine"> </div>

                <p className="indent">Email </p>
                <p className="centerText">Joseph.Archer1@Marist.edu </p>

                <p className="indent">GitHub </p>
                <p className="centerText">https://github.com/JosephArcher </p>

                <p className="indent" >linkedin</p>
                <p className="centerText">https://www.linkedin.com/JosephArcher</p>
        </div>
    );
    const justinInfo = (
        <div>
            <p className="memberName">Justin Esposito</p>
            <div className="verticalLine"> </div>

                <p className="indent">Email </p>
                <p className="centerText">Justin.Esposito1@Marist.edu </p>

                <p className="indent">GitHub </p>
                <p className="centerText">https://github.com/JustinEsposito </p>

                <p className="indent" >linkedin</p>
                <p className="centerText">https://www.linkedin.com/JustinEsposito </p>
        </div>
    );
    const alexInfo = (
        <div>
            <p className="memberName">Alex Hochberg</p>
            <div className="verticalLine"> </div>

                <p className="indent">Email </p>
                <p className="centerText">Alex.Hochberg1@Marist.edu </p>

                <p className="indent">GitHub </p>
                <p className="centerText">https://github.com/AlexHochberg </p>

                <p className="indent" >linkedin</p>
                <p className="centerText">https://www.linkedin.com/AlexHochberg</p>
        </div>
    );
    const chrisInfo = (
        <div>
            <p className="memberName">Chris DellaDonna</p>
            <div className="verticalLine"> </div>

                <p className="indent">Email </p>
                <p className="centerText">Chris.DellaDonna1@Marist.edu </p>

                <p className="indent">GitHub </p>
                <p className="centerText">https://github.com/ChrisDellaDonna</p>

                <p className="indent" >linkedin</p>
                <p className="centerText">https://www.linkedin.com/ChrisDellaDonna</p>
        </div>
    );
    const johnInfo = (
        <div>
            <p className="memberName">John Prisco</p>
            <div className="verticalLine"> </div>

                <p className="indent">Email</p>
                <p className="centerText">John.Prisco1@Marist.edu </p>

                <p className="indent">GitHub </p>
                <p className="centerText">https://github.com/JohnPrisco </p>

                <p className="indent">linkedin</p>
                <p className="centerText">https://www.linkedin.com/JohnPrisco </p>
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
     			<Jumbotron>
     				<Row>
     					<Col xs={12} sm={12} md={12} lg={12}>
        					<Image className="memberPicture" src={require('./joeAboutPic.jpg')} width="200" height="250" circle responsive />
        				</Col>
        				<Col xs={12} sm={12} md={12} lg={12} >
                            <Row>
        					   {joeInfo}
                            </Row>
        				</Col>
        			</Row>
     			</Jumbotron>
     		</Col>
     		 <Col xs={6} md={6} lg={6}>
     			<Jumbotron>
     			<p className="memberName"> About Joe </p>
     			<div className="verticalLine"> </div>
     			   <p>Joe likes drinking coffee, listening to music, and playing video games.</p>
     			</Jumbotron>
     		</Col>
     	</Row>
     		<Row>
     		<Col xs={6} md={6} lg={6}>
     			<Jumbotron>
     			<p className="memberName"> About John </p>
     			<div className="verticalLine"> </div>
                <p>John has logged thousands of hours in the main line Pokemon series games.</p>
     			</Jumbotron>
     		</Col>
     		 <Col xs={6} md={6} lg={6}>
     			<Jumbotron>
     				<Row>
     					<Col xs={12} sm={12} md={12} lg={12}>
        					<Image className="memberPicture" src={require('./johnAboutPic.jpg')} width="200" height="250" circle responsive />
        				</Col>
        				<Col xs={12} sm={12} md={12} lg={12}>
                            <Row>
                             {johnInfo}
                            </Row>
        				</Col>
        			</Row>
     			</Jumbotron>
     		</Col>
     	</Row>

     	<Row>
     		<Col xs={6} md={6} lg={6}>
     			<Jumbotron>
     				<Row>
     					<Col xs={12} sm={12} md={12} lg={12}>
        					<Image className="memberPicture" src={require('./alexAboutPic.jpg')} width="200" height="250" circle responsive />
        				</Col>
        				<Col xs={12} sm={12} md={12} lg={12} >
        					   <Row>
                                 {alexInfo}
                              </Row>
        				</Col>
        			     </Row>
     			</Jumbotron>
     		</Col>
     		 <Col xs={6} md={6} lg={6}>
     			<Jumbotron>
     			<p className="memberName"> About Alex </p>
     			<div className="verticalLine"> </div>
                 <p> Alex Hochberg sleeps all day and always has a rock in his shoe.</p>
     			</Jumbotron>
     		</Col>
     	</Row>

     	<Row>
     		<Col xs={6} md={6} lg={6}>
     			<Jumbotron>
     			<p className="memberName"> About Justin </p>
     			<div className="verticalLine"> </div>
            <p>On 12/14/15, at 12:09 PM, justin wrote:</p>
            <p> I change printer cartrages faster than any other it guy</p>

          </Jumbotron>
     		</Col>
     		 <Col xs={6} md={6} lg={6}>
     			<Jumbotron>
     				<Row>
     					<Col xs={12} sm={12} md={12} lg={12}>
        					<Image className="memberPicture" src={require('./justinAboutPic.jpg')} width="200" height="250" circle responsive />
        				</Col>
        				<Col xs={12} sm={12} md={12} lg={12} >
        					 <Row>
                             {justinInfo}
                            </Row>
        				</Col>
        			</Row>
     			</Jumbotron>
     		</Col>
     	</Row>

     	<Row>
     		<Col xs={6} md={6} lg={6}>
     			<Jumbotron>
     				<Row>
     					<Col xs={12} sm={12} md={12} lg={12}>
        					<Image className="memberPicture" src={require('./chrisAboutPic.jpg')} width="200" height="250" circle responsive />
        				</Col>
        				<Col xs={12} sm={12} md={12} lg={12} >
        					 <Row>
                            {chrisInfo}
                            </Row>
        				</Col>
        			</Row>
     			</Jumbotron>
     		</Col>
     		 <Col xs={6} md={6} lg={6}>
     			<Jumbotron>
     			<p className="memberName"> About Chris </p>
     			<div className="verticalLine"> </div>
                   <p>Chris likes the Miami Dolphins, drinking coffee, and making music.</p>
     			</Jumbotron>
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

