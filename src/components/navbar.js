import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.scss'

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link id="title" to="/">Frederico<br></br>De Paoli</Link>
        <div className="navlink-box">
          <Link to="/" className="navlink">Projects</Link>
          <Link to="/about" className="navlink">About</Link>
        </div>
      </div>
    )
  }
}

export default NavBar
