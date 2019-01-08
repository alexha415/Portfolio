import React, {Component} from 'react';
import {Col,Row} from 'reactstrap';
import Landing from '../../Components/Landing/Landing';
export default class Home extends Component {
  render(){
    return(
      <Row>
        <Col>
        <Landing/>
        </Col>
      </Row>
    );
  }
}
