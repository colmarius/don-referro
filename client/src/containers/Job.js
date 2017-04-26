import React, { Component } from 'react'
import { JobItem } from '../components'
import JobEdit from './JobEdit'


class Job extends Component {

  render () {
    if (this.props.editingJob !== undefined) {
      return (
        <JobEdit job={ this.props.editingJob } onJobClose={ this.props.onJobClose } onJobUpdate={ this.props.onJobUpdate }>
        </JobEdit>
      )
    } else {
      return (
        <JobItem job={ this.props.job } onJobClose={ this.props.onJobClose }>
        </JobItem>
      )
    }
  }
}

export default Job
