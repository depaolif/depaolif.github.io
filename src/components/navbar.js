import React from 'react'
import '../css/navbar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <a id="title" href="#">Frederico<br></br>De Paoli</a>
        <div className="navlink-box">
          <h3 className="navlink">Projects</h3>
          <h3 className="navlink">About</h3>
          <h3 className="navlink">Blog</h3>
        </div>
      </div>
    )
  }
}

export default NavBar
