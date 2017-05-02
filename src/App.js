import React, { Component } from 'react'
import NavBar from './components/navbar'
import About from './components/about'
import ProjectsList from './components/projects_list'
import FullProject from './components/full_project'
import ProjectData from './data/projects'
import { Grid, Row, Col } from 'react-bootstrap';
import { HashRouter, Route } from 'react-router-dom';
import './App.css'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Grid>
          <Row>
            <Col md={3}>
              <Route path='/' component={NavBar} />
            </Col>
            <Col md={9}>
              <Route path='/about' component={About} />
              <Route exact path='/projects' component={ProjectsList} />
              <Route path='/projects/doodledocs' component={() => (<FullProject project={ProjectData[0]} />)}/>
            </Col>
          </Row>
        </Grid>
      </HashRouter>
    );
  }
}

export default App;
