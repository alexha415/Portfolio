import React, {Component} from 'react';
import './Projects.css';
import {Row,Col,Button, Jumbotron} from 'reactstrap';
import ImageViewer from '../ImageViewer/ImageViewer';

export default class Projects extends Component{


  render(){
    return(
      <Col lg = {{size: 10, offset: 1}} style = {{marginTop: '15px'}}>
      <Row id = 'project-ct' style ={{marginTop: '20px'}}>
        <Row>
          <Col>
            <h1 id = 'title' style= {{ color: '#d0d6e0'}}>{this.props.project.name}</h1>
          </Col>
      </Row>
      <Row>
          <Col lg = {{size: 6, offset: 0}}>
            <Col className = "xsHidden smHidden" id = 'desc-ct' style={{paddingTop: '10%', color: '#d0d6e0'}}>
              <p id = 'desc'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non est vel est cursus tincidunt. Suspendisse vitae facilisis libero, non pharetra eros. In posuere quam fermentum risus venenatis, elementum maximus purus dapibus. Proin pretium tellus nec accumsan bibendum. Donec eget neque ut metus commodo dignissim. Suspendisse potenti. Nulla facilisis justo libero, sed vehicula nisi tincidunt in. Morbi feugiat sem velit, at rutrum neque dictum a. Nulla venenatis sapien eu metus consequat, sed pretium ligula commodo. </p>
              <Button> Details </Button>
            </Col>
          </Col>
          <Col style={{padding: '5%', paddingBottom: '6%' }}>
              <ImageViewer images = {this.props.project.src}/>
          </Col>
        </Row>
      </Row>
      </Col>
    );
  }
}
