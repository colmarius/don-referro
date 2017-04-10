import React, { Component } from 'react'
import { JobList } from '../components'
import { API } from '../services'

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

  render () {
    const { jobs } = this.state

    return <JobList jobs={ jobs }/>
  }
}

export default Jobs
