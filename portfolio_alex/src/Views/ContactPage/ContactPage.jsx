import React, {Component} from 'react';
import {Col,Row,Fade,Container} from 'reactstrap';
import {SocialIcon} from 'react-social-icons';
import './ContactPage.css';
export default class Contact extends Component {
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
      <Fade in = {this.state.fadeIn}> <Row>
        <Col sm = {{size:12,offset: 0 }} lg = {{size: 4, offset: 4}} >
          <h1 id = 'title'>Contact</h1>
          <hr style ={{borderColor:'white'}}/>
          <Container id = "contact-info-ct">
          <p style={{marginTop:'10px', color: '#d0d6e0'}}>Email Address: alexha415@gmail.com</p>
            <Container id = "icons">
              <SocialIcon id = "media-icon" url = "https://www.facebook.com/alex.g.ha"> </SocialIcon>
              <SocialIcon id = "media-icon" url = "https://www.linkedin.com/in/alexha415/"> </SocialIcon>
              <SocialIcon id = "media-icon" url = "https://github.com/almondjoys"> </SocialIcon>
            </Container>
          </Container>
        </Col>
      </Row>
      </Fade>
    );
  }
}
