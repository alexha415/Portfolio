import React, {Component} from 'react';
import {Row,Col, ButtonGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import './Navigation.css';
export default class Navigation extends Component {
  render(){
    return(
          <ButtonGroup id ='header-group'>
            <Link to = "/" id = "button-ct">
              <Button id="header-button">
                Home
              </Button>
            </Link>
            <Link to ='/about' id = "button-ct">
              <Button id="header-button">
                About Me
              </Button>
            </Link>
            <Link to ='/projects' id = "button-ct">
              <Button id="header-button">
                Projects
              </Button>
            </Link>
            <Link to ='/resume' id = "button-ct">
              <Button id="header-button">
                Resume
              </Button>
            </Link>
            <Link to ='/contact' id = "button-ct">
              <Button id="header-button">
                Contact
              </Button>
            </Link>
          </ButtonGroup>
    );
  }
}
