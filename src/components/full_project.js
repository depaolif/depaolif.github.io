import React from 'react'
import { getVideos } from '../helpers/get_videos'
import '../css/full_project.scss'

class FullProject extends React.Component {
  render() {
    const { title, description, githubLink } = this.props.project
    const videos = getVideos(title)
    const videoElements = videos.map((video, i) => {
      return (
        <div className="video-box">
          <video className="video" src={`/doodledocs/${video["name"]}`} controls="controls" height="400" width="600">
            Sorry, your browser does not support .mov videos
          </video>
          <p className="video-caption">{video["caption"]}</p>
        </div>
      )
    })

    return (
      <div className="full-project">
        <h2>{title}</h2>
        <br></br>
        <p className="description">{description}</p>
        <br></br>
        <h3 className="videos-header">Videos</h3>
        {videoElements}
      </div>
    )
  }
}

export default FullProject
