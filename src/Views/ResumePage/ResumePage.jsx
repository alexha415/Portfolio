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
      <Fade in ={this.state.fadeIn}>
      <Col sm={{size: 10,offset: 0}} lg = {{size: 8, offset:2}}>
        <h1 style={{color: '#d0d6e0'}}>Resume</h1>
        <hr style ={{borderColor:'white'}}/>
      </Col>
      <Row>
        <Col lg = {{size: 6, offset: 3}}>
        <embed src="https://drive.google.com/file/d/1nRBBWR-Pmb79l-UsLxY-1_KYRGZiNK5l/preview#toolbar=0&navpanes=0" width="100%" height = '500px'></embed>
        </Col>
      </Row>
      </Fade>
    );
  }
}
