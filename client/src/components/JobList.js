import React from 'react'
import {
  List,
  ListItem,
  IconButton,
  IconMenu,
  MenuItem,
} from 'material-ui'
import {
  NavigationMoreVert,
} from 'material-ui/svg-icons'
import {
  grey400,
} from 'material-ui/styles/colors'

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltipPosition="bottom-left"
  >
    <NavigationMoreVert color={ grey400 } />
  </IconButton>
)

const rightIconMenu = ({ jobId, onJobDelete, onJobEdit }) => {
  return (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem onTouchTap={() => onJobEdit(jobId)}>Edit</MenuItem>
      <MenuItem onTouchTap={() => onJobDelete(jobId)}>Delete</MenuItem>
    </IconMenu>
  )
}

export const JobList = ({ jobs, onJobDelete, onJobTap, onJobEdit }) => {
  return (
    <List>
      { jobs.map(job => (
        <ListItem
          key={ job.id }
          primaryText={ job.title }
          secondaryText={ job.description }
          secondaryTextLines={1}
          rightIconButton={ rightIconMenu({ jobId: job.id, onJobDelete, onJobEdit }) }
          onTouchTap={() => onJobTap(job.id)}
        />)) }
    </List>
  )
}
