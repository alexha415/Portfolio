import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import {Col,Row} from 'reactstrap';
import './Header.css';
export default class Header extends Component {
  render(){
    return(
      <Col>
      <Row style ={{display:'flex', justifyContent:'center'}}>
        <Col style ={{display:'flex', justifyContent:'center'}}>
          <h1 id = 'disclaimer'>Alex Ha</h1>
        </Col>
        <Col>
          <p id = 'contact-info-header'>tel: 415 900 8872</p>
          <p id = 'contact-info-header'>email: alexha415@gmail.com </p>
        </Col>
      </Row>
      <Row>
        <Col id = "header">
          <Navigation/>
        </Col>
      </Row>
      </Col>
    );
  }
}
