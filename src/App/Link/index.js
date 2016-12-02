import React from 'react'
import {connect} from 'react-redux'
import {linkActions} from './module'
import FlatButton from 'material-ui/FlatButton'

const MaterialLink = (props) => (
  <FlatButton onTouchTap={() => {
    props.clicked(props.to)
  }}>{props.children}</FlatButton>
)

export default connect(null, {clicked: linkActions.clicked})(MaterialLink)
