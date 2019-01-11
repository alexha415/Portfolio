import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import './Landing.css';
import {Col,Row,Jumbotron,Button} from 'reactstrap';
export default class Landing extends Component {
  render(){
    return(
      <Row>
        <Col id = 'jumboCol' lg={{size: 10, offset: 1}}>
        <Jumbotron class = "container-fluid" id = 'landing-info'>
        <Col lg = {{size:6, offset: 0}}>
        <h1 className="display-3" style={{color:'#302d2d'}}>Hi, I'm Alex Ha</h1>
        <p className="lead">
        Aspiring front end developer, currently studying at San Francisco
        State University finishing my Bachelors in Computer Science</p>
        <hr style = {{borderColor:'#d0d6e0'}} />
        <p>If you're here, you're probably curious about who I am. Go ahead and check out my about page, then, take a look at some of the projects I've worked on.</p>
        </Col>
        </Jumbotron>
        </Col>
      </Row>
    );
  }
}

//<img id = "portrait-alex" src ={require('../../resources/portrait-alex.png')}></img>
