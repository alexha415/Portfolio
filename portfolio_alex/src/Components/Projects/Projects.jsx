import React, { Component } from 'react';
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

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Jumbotron,
  Col, Row, Button
} from 'reactstrap';
import {withRouter} from 'react-router';
import './Projects.css';

const items = [
  {
    src: [gatortrader1,gatortrader2,gatortrader3,gatortrader4],
    altText: 'GatorTraders',
    caption: 'GatorTraders',
    path: 'gator-traders'
  },
  {
    src: [tankwars4,tankwars1,tankwars2,tankwars3],
    altText: 'Tank Wars',
    caption: 'Tank Wars',
    path: 'tank-wars'
  },
  {
    src: [],
    altText: 'SpeedBuddy',
    caption: 'SpeedBuddy',
    path: 'speed-buddy'
  },
  {
    src: [
      brickbreaker1,
      brickbreaker2,
      brickbreaker3,
      brickbreaker4
    ],
    altText: 'Super Rainbow Reef',
    caption: 'Super Rainbow Reef',
    path: 'super-rainbow-reef'
  }
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.ViewProject = this.ViewProject.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  ViewProject(name){
    this.props.history.push('/projects/'+name);
  }
  componentDidMount(){
    console.log(this.props.history)
  }
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}>

          <Row id = "carousel-item-ct">
          <Col lg={{size:6,offset:0}} id = "img-col" style = {{padding: 0}}>
              {item.src.map((picture) =>{
                console.log(picture)
                return (
                  <img src = {picture} alt = {item.altText}/>
                );
              })
              }
          </Col>
          <Col lg={{size:6, offset: 0}} style={{padding: 0}}>
              <Jumbotron id = "test">
                <Button style={{boxShadow: 'none', backgroundColor:'#0c4db5', borderColor:'white'}}
                onClick={() => this.ViewProject(item.path)}  >{item.caption}</Button>
              </Jumbotron>
            </Col>
          </Row>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        data-interval="false"
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl id = 'control-left' direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl id = 'control-right' direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default withRouter(Projects);
