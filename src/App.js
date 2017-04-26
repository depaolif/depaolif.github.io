import React, { Component } from 'react'
import NavBar from './components/navbar'
import About from './components/about'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <About />
      </div>
    );
  }
}

export default App;
