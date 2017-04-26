import React, { Component } from 'react'
import { Dialog, TextField, Table, TableBody, TableRow, TableRowColumn, FlatButton } from 'material-ui'

class JobEdit extends Component {
  constructor(props) {
    super(props)
    this.state = props.job
  }

  render () {
    const job = this.props.job

    return (
      <Dialog
        title={ job.title }
        open={ true }
        onRequestClose={ this.props.onJobClose }
        autoScrollBodyContent={true}
        actions={<FlatButton label="Save" onTouchTap={() => this.props.onJobUpdate(this.state.id, this.state)} />}
      >
        <Table selectable={false} fixedHeader={false}>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>{ job.id }</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Title</TableRowColumn>
              <TableRowColumn>
                <TextField name="JobTitle" defaultValue={ job.title } onChange={(e, title) => this.setState({title})} />
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Description</TableRowColumn>
              <TableRowColumn>{ job.description }</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Job type</TableRowColumn>
              <TableRowColumn>{ job.job_type }</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Discipline</TableRowColumn>
              <TableRowColumn>{ job.discipline }</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Career level</TableRowColumn>
              <TableRowColumn>{ job.career_level }</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Language</TableRowColumn>
              <TableRowColumn>{ job.language }</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Skills</TableRowColumn>
              <TableRowColumn>{ job.skills }</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Salary</TableRowColumn>
              <TableRowColumn>{ job.min_salary }{ job.currency } - { job.max_salary }{ job.currency }</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </Dialog>
    )
  }
}

export default JobEdit
