import React, { Component } from 'react'
import { JobList, CreateButton } from '../components'
import { API } from '../services'
import Drawer from 'material-ui/Drawer'
import Form from './Form'

const styles = {
  createButton: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
}

class Jobs extends Component {
  constructor () {
    super()
    this.state = {
      jobs: [],
      open: false
    }
  }

  componentWillMount() {
    this._fetchJobs()
  }

  _fetchJobs = () => {
    API.fetchJobs().then(jobs => {
      this.setState({ jobs })
    })
  }

  _deleteJob = (id) => {
    API.deleteJob(id).then(response => {
      const newJobs = this.state.jobs.filter(job => job.id !== id)
      this.setState({ jobs: newJobs })
    })
  }
  
  _createJob = (title, description) => {
    API.createJob({title, description}).then(response => {
      const jobs = this.state.jobs
      jobs.push(response)
      this.setState({ jobs })
    })
  }  

  _showForm = () => {
    this.setState({open: !this.state.open});
  }

  render () {
    const { jobs } = this.state

    return (
      <div>
        <div style={ styles.createButton }>
          <CreateButton
            onTouchTap={ this._showForm }
          />
        </div>
        <JobList jobs={ jobs } onJobDelete={this._deleteJob}/>
        <Drawer open={this.state.open}>
          <Form onJobCreate={this._createJob}/>
        </Drawer>
      </div>  
    )
  }
}

export default Jobs
