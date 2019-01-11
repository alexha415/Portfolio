import React, { Component } from 'react';
import Header from './Components/Header/Header.jsx';
import Landing from './Components/Landing/Landing';
import Home from './Views/HomePage/HomePage';
import Routes from './Routes';
import './App.css';
import {Col} from 'reactstrap';
class App extends Component {
  render() {
    return (
      <Col className="App">
        <Header/>
        <Routes/>
      </Col>
    );
  }
}

export default App;
