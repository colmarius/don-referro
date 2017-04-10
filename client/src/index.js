import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Main from './containers/Main'

injectTapEventPlugin()

ReactDOM.render(
  <Main />,
  document.getElementById('root')
)
