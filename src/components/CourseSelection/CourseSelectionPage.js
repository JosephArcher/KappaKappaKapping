import React ,{ PropTypes, Component } from 'react';
import styles from './CourseSelectionPage.css';
import withStyles from '../../decorators/withStyles';
const DropDownMenu  = require('material-ui/lib/drop-down-menu');
const injectTapEventPlugin = require("react-tap-event-plugin");
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

@withStyles(styles)
class CourseSelectionPage extends React.Component{

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };
 render() {
        const title = 'Course Selection Page';
        injectTapEventPlugin();

         const transferSchoolList = [
       { payload: '1', text: 'None' },
       { payload: '2', text: 'Dutchess Community College'},
    ];
    return (
    <div desktop={true} width={550}>
      <div className="CourseSelectionPage-container">   
<Grid>
    <Row>
      <Col className="leftSide" xs={6} md={4}>

        <p className="center"> Current School </p>
        <DropDownMenu menuItems={transferSchoolList}/>
        
      </Col>
      <Col className="centerArea red" xs={6} md={4}>
        Center Area
      </Col>
      <Col className="rightSide red" xs={6} md={4}>
        Right Area
      </Col>
    </Row>
  </Grid>

      </div>
    </div>
    );
  }
}
export default CourseSelectionPage;