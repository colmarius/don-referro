import React from 'react'
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';

import {
  Dialog
} from 'material-ui'

export const JobItem = ({ job, onJobClose }) => {
  return (
    <Dialog
      title={ job.title }
      open={ true }
      onRequestClose={ onJobClose }
      autoScrollBodyContent={true}
    >
      <Table selectable={false} fixedHeader={false}>
        <TableBody displayRowCheckbox={false}>
          <TableRow selectable={false}>
            <TableRowColumn>ID</TableRowColumn>
            <TableRowColumn>{ job.id }</TableRowColumn>
          </TableRow>
          <TableRow selectable={false}>
            <TableRowColumn>Title</TableRowColumn>
            <TableRowColumn>{ job.title }</TableRowColumn>
          </TableRow>
          <TableRow selectable={false}>
            <TableRowColumn>Description</TableRowColumn>
            <TableRowColumn>{ job.description }</TableRowColumn>
          </TableRow>
          <TableRow selectable={false}>
            <TableRowColumn>Job type</TableRowColumn>
            <TableRowColumn>{ job.job_type }</TableRowColumn>
          </TableRow>
          <TableRow selectable={false}>
            <TableRowColumn>Discipline</TableRowColumn>
            <TableRowColumn>{ job.discipline }</TableRowColumn>
          </TableRow>
          <TableRow selectable={false}>
            <TableRowColumn>Career level</TableRowColumn>
            <TableRowColumn>{ job.career_level }</TableRowColumn>
          </TableRow>
          <TableRow selectable={false}>
            <TableRowColumn>Language</TableRowColumn>
            <TableRowColumn>{ job.language }</TableRowColumn>
          </TableRow>
          <TableRow selectable={false}>
            <TableRowColumn>Skills</TableRowColumn>
            <TableRowColumn>{ job.skills }</TableRowColumn>
          </TableRow>
          <TableRow selectable={false}>
            <TableRowColumn>Salary</TableRowColumn>
            <TableRowColumn>{ job.min_salary }{ job.currency } - { job.max_salary }{ job.currency }</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </Dialog>
  )
}
