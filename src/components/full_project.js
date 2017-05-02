import React from 'react'
import { getVideos } from '../helpers/get_videos'
import '../css/full_project.scss'

class FullProject extends React.Component {
  render() {
    const { title, description, languages, externalApis, githubLink } = this.props.project
    const videoInfo = getVideos(title)
    // const videoElements = videoInfo.map((video, i) => {
    //   return (
    //   )
    // })

    return (
      <div className="project-box">
        <h2><a className="p-link" href={githubLink} target="_blank">{title}</a></h2>
        <br></br>
        <p className="description">{description}</p>
        <h3>Videos</h3>
        <video src="/doodledocs/drawing.mov" controls="controls" height="400" width="600">
          Sorry, your browser does not support .mov videos
        </video>
        <p className="languages">Languages Used: {languages.join(', ')}</p>
      </div>
    )
  }
}

export default FullProject
