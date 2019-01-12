import React, {Component} from 'react';
import {Col,Row,Fade} from 'reactstrap';
import Projects from '../../Components/Projects/Projects'
import './ProjectPage.css';


import brickbreaker1 from '../../resources/brickbreaker1.png';
import brickbreaker2 from '../../resources/brickbreaker2.png';
import brickbreaker3 from '../../resources/brickbreaker3.png';
import brickbreaker4 from '../../resources/brickbreaker4.png';
import brickbreaker5 from '../../resources/brickbreaker5.png';

import tankwars1 from '../../resources/tankwars1.png';
import tankwars2 from '../../resources/tankwars2.png';
import tankwars3 from '../../resources/tankwars3.png';
import tankwars4 from '../../resources/tankwars4.png';

import gatortrader1 from '../../resources/gatortrader1.png';
import gatortrader2 from '../../resources/gatortrader2.png';
import gatortrader3 from '../../resources/gatortrader3.png';
import gatortrader4 from '../../resources/gatortrader4.png';

import speedbuddy1 from '../../resources/speedbuddy1.png';
import speedbuddy2 from '../../resources/speedbuddy2.png';
import speedbuddy3 from '../../resources/speedbuddy3.png';
import speedbuddy4 from '../../resources/speedbuddy4.png';

const items = [
  {
    src: [gatortrader1,gatortrader2,gatortrader3,gatortrader4],
    srcDesc:['test1','test2','test3','test4'],
    name: 'Gator Trader',
    path: 'gator-traders'
  },
  {
    src: [tankwars4,tankwars1,tankwars2,tankwars3],
    srcDesc:['test1','test2','test3','test4'],
    name: 'Tank Wars',
    path: 'tank-wars'
  },
  {
    src: [speedbuddy1,speedbuddy2,speedbuddy3,speedbuddy4],
    srcDesc:['test1','test2','test3','test4'],
    name: 'Speed Buddy',
    path: 'speed-buddy'
  },
  {
    src: [brickbreaker1,brickbreaker2,brickbreaker3,brickbreaker4],
    srcDesc:['test1','test2','test3','test4'],
    name: 'Super Rainbow Reef',
    path: 'super-rainbow-reef'
  }
];

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
      <Col sm={{size: 10,offset: 0}} lg = {{size: 8, offset:2}}>
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
                    <hr style={{borderColor: 'white', size: '5px'}}/>
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
