import React, { Component } from 'react';
import Header from './Components/Header/Header.jsx';
import Landing from './Components/Landing/Landing';
import Home from './Views/HomePage/HomePage';
import Routes from './Routes';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Routes/>
      </div>
    );
  }
}

export default App;
