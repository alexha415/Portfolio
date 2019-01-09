import React, {Component} from 'react';
import {Col,Row,Fade} from 'reactstrap';

export default class Contact extends Component {
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
          This is my contact page
        </Col>
      </Row>
    );
  }
}
