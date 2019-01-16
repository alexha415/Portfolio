import React, {Component} from 'react';
import './Projects.css';
import {Row,Col,Button, Jumbotron,Container} from 'reactstrap';
import ImageViewer from '../ImageViewer/ImageViewer';
import {Link} from 'react-router-dom';

export default class Projects extends Component{


  render(){
    return(
      <Col lg = {{size: 12}} style = {{marginTop: '15px', paddingLeft:'0',paddingRight:'0'}}>
      <Row id = 'project-ct' style ={{marginTop: '20px'}}>
        <Row>
          <Col>
          </Col>
      </Row>
      <Row>
        <Jumbotron id = 'project-jumbo' style = {{border:"5px solid black"}}>
          <Row>
            <Col lg = "6" className = "xsHidden smHidden" id = 'desc-ct'>
              <h1 className = 'project-title'>{this.props.project.name}</h1>
              <hr/>
              <p id = 'project-desc'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non est vel est cursus tincidunt. Suspendisse vitae facilisis libero, non pharetra eros. In posuere quam fermentum risus venenatis, elementum maximus purus dapibus. Proin pretium tellus nec accumsan bibendum. Donec eget neque ut metus commodo dignissim. Suspendisse potenti. Nulla facilisis justo libero, sed vehicula nisi tincidunt in. Morbi feugiat sem velit, at rutrum neque dictum a. Nulla venenatis sapien eu metus consequat, sed pretium ligula commodo. </p>
              <Link to = {
                {
                  pathname: "/projects/" + this.props.project.path,
                  state:
                  {
                    project_name: this.props.project.name,
                    project_src: this.props.project.src,
                    src_desc: this.props.project.srcDesc
                  }
                }
              }>
                <Button> Details </Button>
              </Link>
              </Col>
              <Col id = 'image-col' lg = {{size: 6, offset: 0}} >
                <img src = {this.props.project.src[0]}/>
            </Col>
            </Row>
          </Jumbotron>
      </Row>
      </Row>
      </Col>
    );
  }
}
