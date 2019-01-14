import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './AboutMe.css';
import {Col,Row,Jumbotron,Button,Container} from 'reactstrap';

const about = {
    work_desc: "I am currently studying Computer Science at San Francisco State University. My current\
    focus is on front end web development. I am current studying the react framework and plan to\
    work on many personal projects. I don't have any work experience, however I am striving to \
    work on my programming skills and improve my knowledge as a front end developer. I love to \
    program and I can sit for hours working on projects and tackling challenging problems. ",
    hobby_desc: "I love video games. In fact, I love them so much, up until recently, I wanted\
    to be a game developer. Many of my friends know me as being allergic to the sun, which... I can neither confirm\
      nor deny. If I'm not playing video games, I spend time with my friends playing Magic: \
      The Gathering. Besides staring at a radioactive screen for ten hours a day, I love drinking \
      espresso, and my favorite past time is sitting at a cafe. My favorite place to work or study \
      is at a cafe and, by the way, I like my lattes with extra foam.",
    goals_desc: "To be honest, I'm not sure what I really want to do. I am just a lost software \
    engineer hoping to figure out what I want to specialize in. Right now, I'm just going down \
    the path that interests me the most, which is web development. My goals are to become a su\
    ccessful programmer that can become an asset to any team that I would be a part of. My imme\
    diate goal is to work on different projects is useful for me. After all, \
    what's the point of programming if I can't use it to make my life easier!. Speaking of which,\
    this website is one of my first personal projects, so if you have any criticisms, be sure to \
    head over to my contact info and give me some advice!"
}

const selecter = "aboutJumbo";
export default class AboutMe extends Component {
  render(){
    console.log(styles.aboutJumbo);
    return(
      <Row className = "row no-gutters">
        <Col className = 'jumboCol' lg='12'>
        <Jumbotron id = 'aboutJumbo'>
        <h1 id = 'about-desc'> Education and Work </h1>
        <hr className="my-2" />
        <p  id = 'summary' className="lead">
          {about.work_desc}
        </p>
        </Jumbotron>
        <Jumbotron id = "aboutJumbo">
        <h1 id = 'about-desc'> Hobbies </h1>
        <hr className="my-2" />
        <p  id = 'summary' className="lead">
          {about.hobby_desc}
        </p>
        </Jumbotron>
        <Jumbotron id = "aboutJumbo">
        <h1 id = 'about-desc'> Goals </h1>
        <hr className="my-2" />
        <p  id = 'summary' className="lead">
          {about.goals_desc}
        </p>
        </Jumbotron>
        </Col>
      </Row>
    );
  }
}
