import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import {Col,Row} from 'reactstrap';
import './Header.css';
export default class Header extends Component {
  render(){
    return(
      <Row>
        <Col id = "header">
          <Navigation/>
        </Col>
      </Row>
    );
  }
}
