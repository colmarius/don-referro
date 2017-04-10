import React from 'react'
import { AppBar } from 'material-ui'

export const TopBar = ({ title }) => (
  <AppBar
    title={ title }
    iconClassNameRight='muidocs-icon-navigation-expand-more'
  />
)
