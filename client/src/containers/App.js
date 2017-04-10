import React, { Component } from 'react'
import { API } from '../services'
import { TopBar } from '../components'
import Jobs from './Jobs'

window.API = API

class App extends Component {
  render () {
    return (
      <div>
        <TopBar title='Don Referro'/>
        <Jobs />
      </div>
    )
  }
}

export default App
