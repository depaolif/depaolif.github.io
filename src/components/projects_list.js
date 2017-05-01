import React from 'react'
import Project from './project'
import ProjectData from '../data/projects'
import { Grid, Row, Col } from 'react-bootstrap'
import '../css/projects_list.scss'

class ProjectsList extends React.Component {
  render() {
    // calculating what the projects grid will look like
    const projectsList = ProjectData.map((el, i) => <Project key={i}
      title={ProjectData[i]["title"]}
      description={ProjectData[i]["description"]}
      languages={ProjectData[i]["languages"]}
      externalApis={ProjectData[i]["external apis"]}
      githubLink={ProjectData[i]["github link"]}
    /> )

    const numberRows = Math.ceil(projectsList.length / 2)
    let projectsGrid = []
    let projectOnLeft, projectOnRight
    for (let i = 0; i < numberRows; i++) {
      projectOnLeft = projectsList[i * 2]
      projectOnRight = projectsList[i * 2 + 1]
      projectsGrid[i] = <Row>
        <Col md={6}>{projectOnLeft}</Col>
        <Col md={6}>{projectOnRight}</Col>
      </Row>
    }
    return (
      <Grid id="projects-list">
        {projectsGrid}
      </Grid>
    )
  }
}

export default ProjectsList
