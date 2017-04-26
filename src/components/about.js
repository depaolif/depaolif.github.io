import React from 'react'
import '../css/about.css'

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <p>I am baby programmer. Hire me!</p>
        <p>Contact Info:</p>
        <ul>
          <li><a className="s-link" href="https://www.linkedin.com/in/frederico-de-paoli/">LinkedIn</a></li>
          <li><a className="s-link" href="https://github.com/depaolif">Github</a></li>
          <li><a className="s-link" href="https://medium.com/@frederico.de.paoli/">Blog</a></li>
          <li><a className="s-link" href="mailto:frederico.de.paoli@gmail.com">Email</a></li>
        </ul>
      </div>
    )
  }
}

export default About
