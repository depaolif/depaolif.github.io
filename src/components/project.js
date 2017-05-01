import React from 'react'
import '../css/project.scss'

class Project extends React.Component {
  render() {
    const { title, description, languages, externalApis, githubLink } = this.props
    return (
      <div className="project-box">
        <h3><a href={githubLink} target="_blank">{title}</a></h3>
        <p>{description}</p>
        <p>Languages Used: {languages.join(' ')}</p>
      </div>
    )
  }
}

export default Project
