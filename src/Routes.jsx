import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Views/HomePage/HomePage';
import About from './Views/AboutPage/AboutPage';
import Project from './Views/ProjectPage/ProjectPage';
import Resume from './Views/ResumePage/ResumePage';
import Contact from './Views/ContactPage/ContactPage';
import ProjectViewer from './Views/ProjectViewer/ProjectViewer';
import ScrollToTop from './ScrollToTop';

const Routes = () => (
  <routes>
    <ScrollToTop/>
    <Switch>
      <Route path = '/about' component = {About}/>
      <Route path = '/projects/*' component = {ProjectViewer}/>
      <Route path = '/projects' component = {Project}/>
      <Route path = '/resume' component = {Resume}/>
      <Route path = '/contact' component = {Contact}/>
      <Route path = '/' component = {Home}/>
      <Route path = '*' component = {Home}/>
    </Switch>
  </routes>
)

export default Routes
