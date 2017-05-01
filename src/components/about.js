import React from 'react'
import '../css/about.scss'
import { Grid, Row, Col } from 'react-bootstrap';

class About extends React.Component {
  render() {
    return (
      <Grid id="about">
        <Row>
          <div className="about-row">
            <p>Former paralegal/neuroscience researcher turned full stack web developer. </p>
            <p>To do: </p>
              <ol>
                <li>Continue learning as a developer</li>
                <li>Work on projects I'm passionate about</li>
                <li>Explore the creative potential of programming</li>
            </ol>
          </div>
        </Row>
        <Row>
          <div className="links-row">
            <Col md={6}>
              <p className="s-header">Social</p>
              <ul className="s-items">
                <li><a className="p-link" href="https://www.linkedin.com/in/frederico-de-paoli/">LinkedIn</a></li>
                <li><a className="p-link" href="https://github.com/depaolif">Github</a></li>
                <li><a className="p-link" href="https://medium.com/@frederico.de.paoli/">Blog</a></li>
              </ul>
            </Col>
            <Col md={6}>
              <p className="s-header">Personal</p>
              <ul className="s-items">
                <li><a className="p-link" href="mailto:frederico.de.paoli@gmail.com">Email</a></li>
                <li><a className="p-link" target="_blank" href="De Paoli - Resume w icons.pdf">Resume</a></li>
              </ul>
            </Col>
          </div>
        </Row>
      </Grid>
    )
  }
}

export default About
