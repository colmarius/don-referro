import React, { Component } from 'react'
import { TopBar } from '../components'
import { API } from '../services'

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
}

window.API = API

class App extends Component {
  render () {
    return (
      <TopBar title='Don Referro'/>
    )
  }
}

export default App
