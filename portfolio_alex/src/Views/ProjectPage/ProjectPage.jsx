import React, {Component} from 'react';
import {Col,Row,Fade} from 'reactstrap';
import Projects from '../../Components/Projects/Projects'
import './ProjectPage.css';
export default class Project extends Component {
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
        <Col lg={{size:10, offset: 1}}>
          <Fade in = {this.state.fadeIn}> <Projects/> </Fade>
        </Col>
      </Row>
    );
  }
}
