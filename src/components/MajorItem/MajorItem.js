import React ,{ PropTypes, Component} from 'react';
import styles from './MajorItem.css';
import withStyles from '../../decorators/withStyles';
import {Button} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Label} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {ProgressBar} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';
import {Collapse} from 'react-bootstrap';
import {Well} from 'react-bootstrap';
const  injectTapEventPlugin = require("react-tap-event-plugin");
import TransferCoursesTable from '../TransferCoursesTable';
import CompletedCoursesTable from '../CompletedCoursesTable';
const PieChart = require("react-chartjs").Pie;

@withStyles(styles)
class MajorItem extends Component {

  constructor() {
    super();
    this.state = {};
  }

  static propTypes = {
    majorTitle: PropTypes.string.isRequired,
    majorPercent: PropTypes.number.isRequired,
    courseList: PropTypes.array
  };

  render() {

    const majorTitle = this.props.majorTitle;
    const majorPercent = this.props.majorPercent;

    // Get the Course List from the props
    const courseList = this.props.courseList;

    // Break up the array and create nice string for output
    const dataString = createDataString(courseList);


    function createDataString(courseList) {

      // Initalize variables
      var x = "Transferable Courses: ";

      for(var i = 0; i < courseList.length; i++) {

        x = x + courseList[i].course_title;

        if(i != courseList.length - 1){
          x = x + ", ";
        }
      }
      return x;
    }

    return (
      <Row className='majorItems'>
        <Col xs={12} sm={12} md={12} lg={12}>
          <p className="majorTitle"> {majorTitle} <span className="downArrowIcon"> <a onClick={ ()=> this.setState({ open: !this.state.open })  }> <Glyphicon glyph="glyphicon glyphicon-chevron-down" />  </a> </span> </p>
        </Col>
        <Col xs={12} sm={12} md={12}>
          <ProgressBar striped bsStyle="success" now={majorPercent} label="%(percent)s%" />
          <Collapse in={this.state.open}>
            <div>
              <Well>
                {dataString}
              </Well>
            </div>
          </Collapse>
        </Col>
      </Row>

    );
  }
}
export default  MajorItem;
