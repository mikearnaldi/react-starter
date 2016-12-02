import React from 'react'
import {connect} from 'react-redux'
import {push} from '../../router'
import FlatButton from 'material-ui/FlatButton'

const MaterialLink = (props) => (
  <FlatButton onTouchTap={() => {
    props.push(props.to)
  }}>{props.children}</FlatButton>
)

export default connect(null, {push: push})(MaterialLink)
