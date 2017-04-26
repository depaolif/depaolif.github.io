import React, { Component } from 'react'
import NavBar from './components/navbar'
import About from './components/about'
import ProjectsList from './components/projects_list'
import { Grid, Row, Col } from 'react-bootstrap';
import { HashRouter, Route } from 'react-router-dom';
import './App.css'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Grid>
          <Row>
            <Col md={4}>
              <Route path='/' component={NavBar} />
            </Col>
            <Col md={8}>
              <Route path='/about' component={About} />
              <Route path='/projects' component={ProjectsList} />
            </Col>
          </Row>
        </Grid>
      </HashRouter>
    );
  }
}

export default App;
