import React, {Component} from 'react';
import {Col,Row,Fade} from 'reactstrap';
import Projects from '../../Components/Projects/Projects'
import './ProjectPage.css';
import items from '../../projects.jsx';
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
      <Fade in = {this.state.fadeIn}>
      <Col sm={{size: 10,offset: 0}} lg = {{size: 12, offset:0}}>
        <h1 style={{color: '#d0d6e0'}}>Projects</h1>
        <hr style ={{borderColor:'white'}}/>
      </Col>
      <Row>
        <Col>
        { items.map((item) => {
              return (
                <div>
                  <Projects project = {item}/>
                  <Col lg={{size: 8, offset: 2}}>
                  </Col>
                </div>);
          })
        }
        </Col>
      </Row>
      </Fade>
    );
  }
}
