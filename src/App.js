import React, { Component } from 'react'
import NavBar from './components/navbar'
import About from './components/about'
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css'


class App extends Component {
  render() {
    return (
      <Grid className="app">
        <Row >
          <Col md={4}><NavBar /></Col>
          <Col md={8}><About /></Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
