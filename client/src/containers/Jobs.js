import React, { Component } from 'react'
import { JobList, CreateButton } from '../components'
import { API } from '../services'

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
      jobs: []
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

  render () {
    const { jobs } = this.state

    return (
      <div>
        <div style={ styles.createButton }>
          <CreateButton
            onTouchTap={ () => console.log('tapped job create button') }
          />
        </div>
        <JobList jobs={ jobs } onJobDelete={this._deleteJob}/>
      </div>
    )
  }
}

export default Jobs
