import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link id="title" to="/">Frederico<br></br>De Paoli</Link>
        <div className="navlink-box">
          <Link to="#" className="navlink">Projects</Link>
          <Link to="/about" className="navlink">About</Link>
          <Link to="#" className="navlink">Blog</Link>
        </div>
      </div>
    )
  }
}

export default NavBar
