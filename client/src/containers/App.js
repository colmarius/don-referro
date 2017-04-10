import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { API } from '../services'

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
}

window.API = API

class App extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      open: false,
    }
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    })
  }

  render () {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    )

    return (
      <div style={styles.container}>
        <Dialog
          open={this.state.open}
          title="Super Secret Password"
          actions={standardActions}
          onRequestClose={this.handleRequestClose}
        >
          1-2-3-4-5
        </Dialog>
        <h1>Material-UI</h1>
        <h2>example project</h2>
        <RaisedButton
          label="Super Secret Password"
          secondary={true}
          onTouchTap={this.handleTouchTap}
        />
      </div>
    )
  }
}

export default App
