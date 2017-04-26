import React, { Component } from 'react'
import { JobList, CreateButton } from '../components'
import Job from './Job'
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
      jobs: [],
      job: undefined,
      editingJob: undefined
    }
  }

  renderJob() {
    const { jobs, job, editingJob } = this.state

    if (job !== undefined || editingJob !== undefined) {
      return (
        <Job job={ job } onJobClose={this._closeJob} editingJob={editingJob} onJobUpdate={this._updateJob}/>
      )
    }
    else {
      return (
        <JobList jobs={ jobs } onJobDelete={this._deleteJob} onJobTap={this._fetchJob} onJobEdit={this._editJob}/>
      )
    }
  }

  componentWillMount() {
    this._fetchJobs()
  }

  _fetchJob = (id) => {
    API.fetchJob(id).then(job => {
      this.setState({ job })
    })
  }

  _closeJob = () => {
    this.setState({ job: undefined, editingJob: undefined })
  }

  _fetchJobs = () => {
    API.fetchJobs().then(jobs => {
      this.setState({ jobs })
    })
  }

  _editJob = (jobId) => {
    API.fetchJob(jobId).then(job => {
      this.setState({editingJob: job})
    })
  }

  _updateJob = (id, job) => {
    API.updateJob(id, job).then(job => {
      this.setState({editingJob: undefined})
      this._fetchJobs()
    })
  }

  _deleteJob = (id) => {
    API.deleteJob(id).then(response => {
      const newJobs = this.state.jobs.filter(job => job.id !== id)
      this.setState({ jobs: newJobs })
    })
  }

  render () {
    return (
      <div>
        <div style={ styles.createButton }>
          <CreateButton
            onTouchTap={ () => console.log('tapped job create button') }
          />
        </div>
        {this.renderJob()}
      </div>
    )
  }
}

export default Jobs
