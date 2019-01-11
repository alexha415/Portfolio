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
        <Col lg = {{size: 4, offset: 3}}>
        <h1 id = 'title'>Resume</h1>
        <hr style ={{borderColor:'white'}}/>
        <embed src="https://drive.google.com/file/d/1nRBBWR-Pmb79l-UsLxY-1_KYRGZiNK5l/preview#toolbar=0&navpanes=0" width="640" height="600"></embed>
        </Col>
      </Row>
    );
  }
}
