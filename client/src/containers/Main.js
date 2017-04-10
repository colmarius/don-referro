import React, { Component } from 'react'
import { deepOrange500 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './App'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
})

class Main extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <App />
      </MuiThemeProvider>
    )
  }
}

export default Main
