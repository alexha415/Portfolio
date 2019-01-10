import React, {Component} from 'react';
import {Col,Row,Fade} from 'reactstrap';

export default class Resume extends Component {

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
        <applet code="TankGame.GameController" archive="TankGame.jar"
          width="400" height="350">
        </applet>
        </Col>
      </Row>
    );
  }
}
