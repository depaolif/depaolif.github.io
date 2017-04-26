import React from 'react'
import '../css/about.css'
import { Grid, Row, Col } from 'react-bootstrap';

class About extends React.Component {
  render() {
    return (
      <Grid id="about">
        <Row className="about-row">
          <p>Former paralegal/neuroscience researcher turned full-stack web developer. </p>
          <p>To do: </p>
            <ol>
              <li>Continue learning as a developer</li>
              <li>Work on projects I'm passionate about</li>
              <li>Explore the creative potential of programming</li>
          </ol>
        </Row>
        <Row className="links-row">
          <Col md={6}>
            <p className="s-header">Social</p>
            <ul className="s-items">
              <li><a className="s-link" href="https://www.linkedin.com/in/frederico-de-paoli/">LinkedIn</a></li>
              <li><a className="s-link" href="https://github.com/depaolif">Github</a></li>
              <li><a className="s-link" href="https://medium.com/@frederico.de.paoli/">Blog</a></li>
            </ul>
          </Col>
          <Col md={6}>
            <p className="s-header">Personal</p>
            <ul className="s-items">
              <li><a className="s-link" href="mailto:frederico.de.paoli@gmail.com">Email</a></li>
              <li><a className="s-link" href="./De Paoli - Resume w icons.pdf">Resume</a></li>
            </ul>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default About
