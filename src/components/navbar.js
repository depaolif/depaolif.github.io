import React from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable';
import '../css/navbar.css'

class MainPage extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h1 id="title">Frederico<br></br>De Paoli</h1>
        <div className="navlink-box">
          <h3 className="navlink">Projects</h3>
          <h3 className="navlink">About</h3>
          <h3 className="navlink">Blog</h3>
        </div>
      </div>
    )
  }
}

export default muiThemeable()(MainPage);
