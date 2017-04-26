import React from 'react'

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <p>Some blurb about me</p>
        <p>Contact Info:</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/frederico-de-paoli/">LinkedIn</a></li>
          <li><a href="https://github.com/depaolif">Github</a></li>
          <li><a href="https://medium.com/@frederico.de.paoli/">Blog</a></li>
          <li><a href="mailto:frederico.de.paoli@gmail.com">Email</a></li>
        </ul>
      </div>
    )
  }
}

export default About
