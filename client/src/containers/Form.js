import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends Component {
  constructor () {
    super()
    this.state = {
       name: '',
       description: ''
    }
  }
  
  render () {
    return (
      <div>
        <TextField
          hintText="Title"
          onChange={(event) => this.setState({name: event.target.value})}
        /><br />
        <br />
        <TextField
          hintText="Description"
          onChange={(event) => this.setState({description: event.target.value})}
        /><br />
        <RaisedButton label="Primary" primary={true} onClick={ () => this.props.onJobCreate(this.state.name, this.state.description) } />
      </div>
    )
  }
}
export default Form