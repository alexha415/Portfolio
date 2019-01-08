import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import '../Landing/Landing.css';
import {Col,Row,Jumbotron,Button} from 'reactstrap';

export default class AboutMe extends Component {
  render(){
    return(
      <Row>
        <Col id = 'jumboCol' lg={{size: 10, offset: 1}}>
        <Jumbotron class = "container-fluid" id = 'landing-info'>
        <p className="lead">
        I am currently studying Computer Science at San Francisco State University. My current focus is on web development as a front end developer.
        I was originally born in San Diego and moved up to San Francisco when I was ten years old. I love playing games, whether its video games, or board game nights
        with my friends. I am an avid Magic: The Gathering fan and am borderline addicted to it.
        </p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
        </p>

        </Jumbotron>
        </Col>
      </Row>
    );
  }
}
