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
    majorPercent: PropTypes.number.isRequired
  };

  render() {

    const majorTitle = this.props.majorTitle;
	  const majorPercent = this.props.majorPercent;
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
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </Well>
          </div>
          </Collapse>
          </Col>
      </Row>

    );
  }
}
export default  MajorItem;