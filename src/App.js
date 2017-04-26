import React, { Component } from 'react'
import NavBar from './components/navbar'
import About from './components/about'
import { Grid, Row, Col } from 'react-bootstrap';
import { HashRouter, Route, Link } from 'react-router-dom';
import './App.css'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Grid>
          <Row>
            <Col md={4} >
              <NavBar />
            </Col>
            <Col md={8} >
              <About />
            </Col>
          </Row>
        </Grid>
      </HashRouter>
    );
  }
}

export default App;
