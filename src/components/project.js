import React from 'react'
import '../css/project.scss'
import { Link } from 'react-router-dom'

class Project extends React.Component {
  render() {
    const { title, description, languages } = this.props
    return (
      <div className="project-box">
        <h3><a className="p-link" href={`/#/projects/${title}`}>{title}</a></h3>
        <br></br>
        <p className="description">{description}</p>
        <p className="languages">Languages Used: {languages.join(', ')}</p>
      </div>
    )
  }
}

export default Project
