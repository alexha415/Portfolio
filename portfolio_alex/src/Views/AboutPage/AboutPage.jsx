import React, {Component} from 'react';
import {Col,Row} from 'reactstrap';
import Header from '../../Components/Header/Header';
import AboutMe from '../../Components/AboutMe/AboutMe';
export default class About extends Component {
  render(){
    return(
      <Row>
        <Col>
          <AboutMe/>
        </Col>
      </Row>
    );
  }
}
