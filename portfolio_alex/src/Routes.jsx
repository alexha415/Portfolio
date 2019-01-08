import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Views/HomePage/HomePage';
import About from './Views/AboutPage/AboutPage';
import Project from './Views/ProjectPage/ProjectPage';
import Resume from './Views/ResumePage/ResumePage';
import Contact from './Views/ContactPage/ContactPage';

const Routes = () => (
  <routes>
    <Switch>
      <Route path = '/about' component = {About}/>
      <Route path = '/projects' component = {Project}/>
      <Route path = '/resume' component = {Resume}/>
      <Route path = '/contact' component = {Contact}/>
      <Route path = '/' component = {Home}/>
    </Switch>
  </routes>
)

export default Routes
