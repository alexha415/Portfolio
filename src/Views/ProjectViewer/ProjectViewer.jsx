import React , {Component} from 'react';
import {Col,Row,Jumbotron,Button,ButtonGroup,Nav,NavLink,NavItem} from 'reactstrap';
import ImageViewer from '../../Components/ImageViewer/ImageViewer';
import './ProjectViewer.css';
export default class ProjectViewer extends Component {

  constructor(props){
    super(props);
    this.setIndex = this.setIndex.bind(this);
    this.getDesc = this.getDesc.bind(this);
  }
  componentWillMount(){
    this.setState({index: 0});

  }
  setIndex(newIndex){
    this.setState({index: newIndex});
  }
  getDesc(index){
    let desc = this.props.location.state.src_desc[index];
    if(desc === undefined || desc === ""){
      return "No Description";
    }else{
        return desc;
    }
  }
  test(){
    console.log('button pressed');
  }
  render(){
    return(
      <Col className = 'project-col' lg = '12' style = {{paddingLeft: '0'}}>
        <Col  id = 'proj-button-grp-col' lg = '2'>
          <ButtonGroup id = "proj-btn-grp" vertical>
          <p>Projects</p>
          <Button onClick ={this.test}>GatorTrader</Button>
          <Button onClick = {this.test}>Tank Wars</Button>
          <Button onClick = {this.test}>SpeedBuddy</Button>
          <Button onClick = {this.test}>Super Rainbow Reef</Button>
          </ButtonGroup>
        </Col>
        <Col>
          <Col lg = '12' id = 'proj-name-col' style = {{display:'flex', justifyContent:'center'}}>
            <h1 id = 'proj-name-header' className = "project-h1">{this.props.location.state.project_name}</h1>
          </Col>
          <Col id = 'img-viewer-col' style = {{display:'flex', justifyContent:'center'}}>
            <ImageViewer
            images = {this.props.location.state.project_src}
            setIndex = {this.setIndex}/>
          </Col>
          <Col lg = '5'id = 'img-desc-col' lg = {{size: 6, offset:3}}>
          <p id = 'img-desc'>{this.getDesc(this.state.index)}</p>
          </Col>
        </Col>
      </Col>
    );
  }
}
/*
<Nav id = 'proj-button-grp' vertical style = {{width: '100%'}}>
  <NavItem>
    <NavLink href="#">
    1
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
    2
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
    3
    </NavLink>
  </NavItem>
</Nav>
*/
