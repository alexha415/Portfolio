import React, {Component} from 'react';
import {Col,Row,Fade} from 'reactstrap';
import Header from '../../Components/Header/Header';
import AboutMe from '../../Components/AboutMe/AboutMe';
export default class About extends Component {
  componentWillMount(){
    this.state = ({
      fadeIn: true
    });
    this.toggle = this.toggle.bind(this);
  }
  toggle(){
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }

  render(){
    return(
      <Row>
        <Col>
          <Fade in = {this.state.fadeIn} ><AboutMe/></Fade>
        </Col>
      </Row>
    );
  }
}
