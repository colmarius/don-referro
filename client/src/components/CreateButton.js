import React from 'react'
import { FloatingActionButton } from 'material-ui'
import { ContentAdd } from 'material-ui/svg-icons'

const style = {
  margin: 10,
}

export const CreateButton = ({ onTouchTap }) => (
  <FloatingActionButton
    style={ style }
    onTouchTap={ onTouchTap }
  >
    <ContentAdd />
  </FloatingActionButton>
)
