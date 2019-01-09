import React, {Component} from 'react';
import {Col,Row,Fade} from 'reactstrap';
import Landing from '../../Components/Landing/Landing';
export default class Home extends Component {

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
          <Fade in = {this.state.fadeIn}> <Landing/> </Fade>
        </Col>
      </Row>
    );
  }
}
