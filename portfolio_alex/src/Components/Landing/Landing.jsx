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
        <img id = "portrait-alex" class = "img-fluid" alt = "Responsive Image" src ={require('../../resources/portrait-alex.png')}></img>
        <h1 className="display-3">Hi, I'm Alex Ha</h1>
        <p className="lead">
        Aspiring front end developer, currently studying at San Francisco
        State University finishing my Bachelors in Computer Science</p>
        <hr className="my-2" />
        <p>If you're here, you probably want to know more about me. Go ahead and check out my about me page, then take a look at some of the projects I've worked on.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
        </Jumbotron>
        </Col>
      </Row>
    );
  }
}

//<img id = "portrait-alex" src ={require('../../resources/portrait-alex.png')}></img>
