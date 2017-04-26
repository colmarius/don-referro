import React, { Component } from 'react'
import { TopBar } from '../components'
import Jobs from './Jobs'

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
