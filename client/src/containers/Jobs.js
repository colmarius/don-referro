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

  render () {
    const { jobs } = this.state

    return (
      <div>
        <div style={ styles.createButton }>
          <CreateButton
            onTouchTap={ () => console.log('tapped job create button') }
          />
        </div>
        <JobList jobs={ jobs }/>
      </div>
    )
  }
}

export default Jobs
