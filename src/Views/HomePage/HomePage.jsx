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
      <Fade in = {this.state.fadeIn}>
      <Col sm={{size: 10,offset: 0}} lg = {{size: 8, offset:2}}>
        <h1 style={{color: '#d0d6e0'}}>Landing</h1>
        <hr style ={{borderColor:'white'}}/>
      </Col>
      <Row>
        <Col>
           <Landing/>
        </Col>
      </Row>
      </Fade>
    );
  }
}
