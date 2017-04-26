import React, { Component } from 'react'
import NavBar from './components/navbar'
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './App.css'

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: 'cyan500'
  }
})

class App extends Component {
  render() {
    return (
      <NavBar />
    );
  }
}

export default App;
