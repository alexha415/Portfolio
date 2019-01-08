import React, {Component} from 'react';
import {Col,Row} from 'reactstrap';
import Projects from '../../Components/Projects/Projects'
export default class Project extends Component {
  render(){
    return(
      <Row>
        <Col>
          <Projects/>
        </Col>
      </Row>
    );
  }
}
