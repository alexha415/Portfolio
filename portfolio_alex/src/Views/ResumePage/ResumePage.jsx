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
          <applet url={'../../resources/TankGame.jar'} style={{width: '350px', height:'350px'}}></applet>
        </Col>
      </Row>
    );
  }
}
