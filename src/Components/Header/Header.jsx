import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import {Col,Row} from 'reactstrap';
import './Header.css';
export default class Header extends Component {
  render(){
    return(
      <Col>
      <Row style ={{display:'flex', justifyContent:'center'}}>
        <h1 id = 'disclaimer'> THIS WEBSITE IS A WORK IN PROGRESS</h1>
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
